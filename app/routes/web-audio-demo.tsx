import { Keyboard } from "~/components/Keyboard";
import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function App() {
  return (
    <div className="flex flex-col gap-24 h-screen w-full items-center justify-center">
      <Keyboard />
      <SpeakerNotes>
        Here's a little demo. I've got a keyboard here, and I can click to play
        notes. All of these are being generated in my browser using Web Audio
        API. I'm using a package that has formulas for turning a bunch of
        different waveforms into approximations of different instruments. Though
        it does sound like bad MIDI tracks from the 80's and 90's. Speaking of
        MIDI... Watch this.
      </SpeakerNotes>
    </div>
  );
}
