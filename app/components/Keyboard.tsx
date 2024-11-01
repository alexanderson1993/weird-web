import { useEffect, useState } from "react";
// @ts-ignore
import Instruments from "webaudio-instruments";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import { cn } from "~/lib/utils";
import { addMidiSubscriber } from "~/utils/midi";

export function Keyboard() {
  const [player] = useState(
    () => typeof window !== "undefined" && new Instruments()
  );

  const [instrument, setInstrument] = useState(88);
  useEffect(() => {
    const unsub = addMidiSubscriber((message) => {
      if (
        message.messageType === "noteon" &&
        "key" in message &&
        typeof message.key === "number"
      ) {
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
