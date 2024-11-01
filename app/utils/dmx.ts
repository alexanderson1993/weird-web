import React, { createContext } from "react";
import lightingWorker from "./updateLighting?url";

declare global {
  interface Navigator {
    // @ts-expect-error This USB type comes from @types/w3c-web-usb
    readonly usb: USB;
  }
}

interface DMXDevice {
  ready: boolean;
  close: () => Promise<void>;
  update: (channels: number[]) => void;
  activate: () => Promise<void>;
}
async function noop() {}

async function setUpLightingDevice(): Promise<DMXDevice> {
  const lightingDevice = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x403, productId: 0x6001 }],
  });
  await lightingDevice.open();
  await lightingDevice.claimInterface(0);

  lightingDevice.controlTransferOut({
    // It's a USB class request
    requestType: "class",
    // The destination of this request is the interface
    recipient: "interface",
    // CDC: Communication Device Class
    // 0x22: SET_CONTROL_LINE_STATE
    // RS-232 signal used to tell the USB device that the computer is now present.
    request: 0x22,
    // Yes
    value: 0x01,
    // Interface #0
    index: 0x00,
  });

  const universe = new Array(512).fill(0);

  // This only supports ENTTEC Pro devices
  const ENTTEC_PRO_DMX_STARTCODE = 0x00;
  const ENTTEC_PRO_START_OF_MSG = 0x7e;
  const ENTTEC_PRO_END_OF_MSG = 0xe7;
  const ENTTEC_PRO_SEND_DMX_RQ = 0x06;

  const header = [
    ENTTEC_PRO_START_OF_MSG,
    ENTTEC_PRO_SEND_DMX_RQ,
    universe.length & 0xff,
    (universe.length >> 8) & 0xff,
    ENTTEC_PRO_DMX_STARTCODE,
  ];

  // Initialize a blank universe
  lightingDevice.transferOut(
    2,
    Uint8Array.from([...header, ...universe, ENTTEC_PRO_END_OF_MSG])
  );

  return {
    ready: true,
    activate: noop,
    close: () => lightingDevice.close(),
    update: (channels: number[]) => {
      // Make sure we're sending 512 channels
      for (let i = 0; i < 512; i++) {
        universe[i] = Math.round(channels[i]) || 0;
      }
      // Send the message
      if (lightingDevice.opened) {
        return lightingDevice.transferOut(
          2,
          Uint8Array.from([...header, ...universe, ENTTEC_PRO_END_OF_MSG])
        );
      }
      return Promise.resolve({ status: "stall" });
    },
  };
}

export function useUSBDMX(autoActivate?: boolean): DMXDevice {
  const [activated, setActivated] = React.useState(false);

  const activate = React.useCallback(() => {
    if (!activated) {
      return setUpLightingDevice().then((res) => {
        setActivated(true);
        setLightingDevice(res);
      });
    }
    return Promise.resolve();
  }, [activated]);

  const [lightingDevice, setLightingDevice] = React.useState<DMXDevice>({
    close: noop,
    update: () => Promise.resolve({ status: "stall" }),
    ready: false,
    activate,
  });

  React.useEffect(() => {
    if (autoActivate) {
      activate();
    }
    return () => {
      lightingDevice?.close();
    };
  }, [lightingDevice, autoActivate, activate]);

  const worker = React.useRef<Worker>();
  const universeRef = React.useRef<number[]>([]);

  React.useEffect(() => {
    worker.current = new Worker(lightingWorker);
    worker.current.onmessage = () => {
      const universe = universeRef.current;
      if (!universe) return;
      if (lightingDevice.ready) {
        lightingDevice.update(universe);
      }
    };
    return () => {
      worker.current?.terminate();
      worker.current = undefined;
    };
  }, [lightingDevice]);

  return {
    activate: lightingDevice.activate,
    update: (universe) => {
      universeRef.current = universe;
    },
    ready: lightingDevice.ready,
    close: lightingDevice.close,
  };
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
export const DmxContext = createContext<DMXDevice>(null!);
