import { useRef } from "react";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import useAnimationFrame from "~/lib/useAnimationFrame";

export default function Chrome() {
  const ref = useRef<HTMLCanvasElement>(null);

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
      const y =
        height / 2 + amplitude * Math.sin(frequency * x + Date.now() / 500);
      context.lineTo(x, y);
    }
    context.strokeStyle = "#0088ff";
    context.lineWidth = 2;
    context.stroke();
  });
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4">
      <canvas
        ref={ref}
        height={400}
        width={900}
        className="[view-transition-name:waveform]"
      />
      <span className="text-6xl font-mono tabular-nums text-center block w-48 opacity-0">
        1
      </span>
      <SpeakerNotes>
        To start, let's talk about sound. This is a waveform. The sounds that we
        hear are waves that propagate through the air. Our ears pick up the
        frequency of the wave as the pitch, and the amplitude as the loudness.
      </SpeakerNotes>
    </div>
  );
}
