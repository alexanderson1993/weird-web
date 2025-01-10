import { useEffect, useState } from "react";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import { addGamepadCallback, calculateHatDirection } from "~/utils/gamepad";
import { addMidiSubscriber } from "~/utils/midi";

export default function App() {
  const [controllerState, setControllerState] = useState<
    Record<string, number>
  >({ 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0 });
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
    const clearCallback = addGamepadCallback((gamepad) => {
      const hat = calculateHatDirection(gamepad.axes[9]);
      console.log(hat);
      setControllerState((state) => ({
        ...state,
        [16]: Math.min(255, Math.max(0, ((gamepad.axes[0] + 1) / 2) * 255)),
        [17]: Math.min(255, Math.max(0, ((gamepad.axes[1] + 1) / 2) * 255)),
        [18]: Math.min(255, Math.max(0, ((gamepad.axes[2] + 1) / 2) * 255)),
        [19]: Math.min(255, Math.max(0, ((hat.x + 1) / 2) * 255)),
        [20]: Math.min(255, Math.max(0, ((hat.y + 1) / 2) * 255)),
      }));
    });

    return () => clearCallback();
  }, []);
  const rgb1 = `rgb(${Math.round(controllerState["16"]) ?? 0}, ${
    Math.round(controllerState["17"]) ?? 0
  }, ${Math.round(controllerState["18"]) ?? 0})`;

  const rbg2 = `rgb(${Math.round(controllerState["19"]) ?? 0}, ${
    Math.round(controllerState["20"]) ?? 0
  }, ${Math.round(controllerState["21"]) ?? 0})`;

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
        MIDI isn't the only input device I can play around with in my browser
        though. I can also use this gamepad.
      </SpeakerNotes>
    </div>
  );
}
