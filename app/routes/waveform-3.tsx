import { useRef } from "react";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import useAnimationFrame from "~/lib/useAnimationFrame";

function getY(
  x: number,
  frequency: number,
  amplitude: number,
  phaseShift = 500
) {
  return (
    (amplitude / 5) * Math.sin(frequency * x + Date.now() / phaseShift) +
    (amplitude / 5) * Math.sin((frequency / 10) * x + Date.now() / phaseShift) +
    (amplitude / 5) * Math.sin((frequency / 2) * x + Date.now() / phaseShift) +
    (amplitude / 5) * Math.sin((frequency / 7) * x + Date.now() / phaseShift) +
    (amplitude / 5) * Math.sin(frequency * 3 * x + Date.now() / phaseShift)
  );
}
export default function Chrome() {
  const ref = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useAnimationFrame(() => {
    if (!ref.current) return;

    const canvas = ref.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width;
    const height = canvas.height;
    const amplitude = height / 2.1;
    const frequency = 0.05;

    context.beginPath();
    context.moveTo(0, height / 2 + amplitude * Math.sin(Date.now() / 500));

    for (let x = 0; x < width * dpr; x++) {
      const y = height / 2 + getY(x, frequency, amplitude);
      context.lineTo(x, y);
    }
    context.strokeStyle = "#0088ff";
    context.lineWidth = 2;
    context.stroke();

    context.beginPath();
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);
    context.strokeStyle = "white";
    context.stroke();

    if (textRef.current) {
      textRef.current.innerText = (
        -Math.round((getY(width / 2, frequency, amplitude) / amplitude) * 10) /
        10
      ).toString();
    }
  });
  return (
    <div className="flex h-screen items-center justify-center gap-4 flex-col">
      <canvas
        ref={ref}
        height={400}
        width={900}
        className="[view-transition-name:waveform]"
      />
      <span
        className="text-6xl font-mono tabular-nums text-center block w-48"
        ref={textRef}
      >
        1
      </span>
      <SpeakerNotes>
        But what if we could take those numbers and mess around with them before
        turning them back into sound? That's what the Web Audio API lets us do.
      </SpeakerNotes>
    </div>
  );
}
