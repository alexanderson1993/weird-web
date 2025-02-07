import { useEffect, useState } from "react";
// @ts-ignore
import Instruments from "webaudio-instruments";
// @ts-ignore
import WebSynth from "webaudio-tinysynth";
import Tuna from "tunajs";

import { cn } from "~/lib/utils";
import { addMidiSubscriber } from "~/utils/midi";
import { addGamepadCallback } from "~/utils/gamepad";

export function Keyboard() {
  const [player] = useState(
    () => typeof window !== "undefined" && new Instruments()
  );
  const [audioContext] = useState(
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    () => (typeof window !== "undefined" ? new AudioContext() : null)!
  );
  const [[destination, chorus, tremolo]] = useState(() => {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    if (typeof window === "undefined") return [null!, null!, null!];
    const tuna = new Tuna(audioContext);
    const chorus = new tuna.Chorus({
      rate: 1.5,
      feedback: 0.8,
      delay: 0.0045,
      bypass: false,
    });
    const tremolo = new tuna.Tremolo({
      intensity: 0.3, //0 to 1
      rate: 5, //0.001 to 8
      stereoPhase: 0, //0 to 180
      bypass: false,
    });
    tremolo.connect(chorus);
    chorus.connect(audioContext.destination);
    return [tremolo, chorus, tremolo] as const;
  });
  const [synth] = useState(
    () => typeof window !== "undefined" && new WebSynth()
  );

  useEffect(() => {
    function callback(gamepad: Gamepad) {
      chorus.rate = ((gamepad.axes[0] + 1) / 2) * 8;
      synth.setBend(0, ((gamepad.axes[1] + 1) / 2) * 16384);
    }

    const unsub = addGamepadCallback(callback);
    return () => unsub();
  }, [synth]);

  useEffect(() => {
    synth.setAudioContext(audioContext, destination);
  }, [synth, destination, audioContext]);

  const [instrument, setInstrument] = useState(88);
  useEffect(() => {
    synth.setProgram(0, instrument);
  }, [instrument, synth]);

  useEffect(() => {
    const unsub = addMidiSubscriber((message) => {
      if (message.deviceName === "Roland Digital Piano") {
        synth.send(message._data);
      } else if (
        message.messageType === "noteon" &&
        "key" in message &&
        typeof message.key === "number"
      ) {
        console.log(message);
        if (message.value > 0) {
          const notes = keyMap.get(message.key) || [];
          for (const args of notes) {
            player.play(args[0], args[1]);
          }
        }
      }
    });
    return () => {
      unsub();
    };
  });

  const blackKeys = [1, 3, 6, 8, 10];

  return (
    <>
      <select
        className="text-2xl"
        value={instrument}
        onChange={(event) => setInstrument(Number(event.target.value))}
      >
        {player.names?.map((p, i) => (
          <option key={p} value={i}>
            {p}
          </option>
        ))}
      </select>
      <div className="flex gap-px">
        {Array.from({ length: 34 }).map((_, i) => (
          <button
            key={`key-${
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              i
            }`}
            className={cn(
              "h-32 w-10 bg-gradient-to-b from-white to-white active:from-white/90 active:to-white/70 rounded-b mr-px",
              {
                "w-6 h-16 -mr-3 z-10 bg-gradient-to-b from-black to-black active:from-gray-950 active:to-gray-800":
                  blackKeys.includes(i % 12),
                "-mr-3": blackKeys.includes((i + 1) % 12),
              }
            )}
            type="button"
            onClick={() => player.play(instrument, 48 + i)}
          />
        ))}
      </div>
    </>
  );
}

const keyMap = new Map([
  [35, [[136, 70]]],
  [36, [[138, 70]]],
  [37, [[140, 70]]],
  [38, [[141, 90]]],
  [39, [[143, 70]]],
  [89, [[88, 60]]],
  [90, [[88, 62]]],
  [40, [[88, 64]]],
  [41, [[88, 65]]],
  [42, [[88, 67]]],
  [87, [[88, 55]]],
  [88, [[88, 57]]],
  [91, [[88, 59]]],
  [
    95,
    [
      [88, 72],
      [88, 67],
    ],
  ],
]);
