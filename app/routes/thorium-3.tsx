import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Thorium() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/hardware.jpg"
        className="w-[1000px] [view-transition-name:me]"
      />
      <SpeakerNotes>
        Web MIDI and Web Gamepad lets players connect physical devices to make
        the game feel just a little bit more immersive and accessible.
      </SpeakerNotes>
    </div>
  );
}
