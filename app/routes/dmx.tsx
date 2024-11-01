import { useContext, useEffect, useState } from "react";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import { DmxContext } from "~/utils/dmx";
import { addMidiSubscriber } from "~/utils/midi";

export default function DMX() {
  const device = useContext(DmxContext);
  const [controllerState, setControllerState] = useState<
    Record<string, number>
  >({});
  useEffect(() => {
    const unsub = addMidiSubscriber((message) => {
      if (message.messageType === "controlchange") {
        const num = message.controllerNumber.toString();
        let value = message.value;
        if (value > 64) {
          value = (value - 64) * -1;
        }
        setControllerState((state) => ({
          ...state,
          [num]: Math.min(255, Math.max(0, (state[num] ?? 0) + value * 3)),
        }));
      }
    });
    return () => {
      unsub();
    };
  });

  useEffect(() => {
    const rgb1 = [
      controllerState["16"] ?? 0,
      controllerState["17"] ?? 0,
      controllerState["18"] ?? 0,
      controllerState["19"] ?? 0,
    ];
    const universe = [0, 0, 0, 255, ...rgb1];
    device.update(universe);
  }, [controllerState, device]);

  return (
    <div className="h-screen w-full flex flex-col gap-2 justify-center items-center">
      <div
        className="w-[400px] h-[400px]"
        style={{
          backgroundColor: `rgb(${controllerState["16"] ?? 0}, ${
            controllerState["17"] ?? 0
          }, ${controllerState["18"] ?? 0})`,
        }}
      />
      <SpeakerNotes>
        I can even control the color of this box. Which just happens to be
        connected to this light. Pretty! (Don't forget to show off ultraviolet)
      </SpeakerNotes>
    </div>
  );
}
