import { SpeakerNotes } from "~/components/SpeakerNotes";
import { codeToHtml } from "shiki";
import type * as Route from "./+types.webusb-4";

export async function clientLoader() {
  return {
    code: await codeToHtml(
      `const universe = new Array(512).fill(0);

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
);`,
      {
        lang: "ts",
        theme: "github-light",
      }
    ),
  };
}

export default function Chrome({ loaderData: { code } }: Route.ComponentProps) {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <div
        className="[view-transition-name:code]"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: code }}
      />

      <SpeakerNotes>
        Finally, we can send commands, which means creating an array of bytes
        and sending those to the device. Which bytes depends on what USB device
        you're talking to. In this case, my DMX controller has me use certain
        bytes to signal the start and end of the message, and a command. This
        command tells it to zero out the entire DMX universe, which turns off
        all the lights.
      </SpeakerNotes>
    </div>
  );
}
