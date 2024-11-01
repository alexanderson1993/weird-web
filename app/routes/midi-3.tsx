import { useEffect, useState } from "react";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import { addMidiSubscriber } from "~/utils/midi";

export default function App() {
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
  const rgb1 = `rgb(${controllerState["16"] ?? 0}, ${
    controllerState["17"] ?? 0
  }, ${controllerState["18"] ?? 0})`;

  const rbg2 = `rgb(${controllerState["19"] ?? 0}, ${
    controllerState["20"] ?? 0
  }, ${controllerState["21"] ?? 0})`;

  return (
    <div className="h-screen w-full flex flex-col gap-2 justify-center items-center">
      <div
        className="w-[400px] h-[400px]"
        style={{
          background: `linear-gradient(45deg in oklab, ${rgb1}, ${rbg2})`,
        }}
      />
      <code className="max-w-[400px] text-center">
        linear-gradient(45deg in oklab, {rgb1}, {rbg2})
      </code>
      <SpeakerNotes>
        I could control the color of the gradient with these control knobs.
        Shout out to oklab interpolation for making this look good by default.
      </SpeakerNotes>
    </div>
  );
}
