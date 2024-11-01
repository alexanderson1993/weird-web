import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function App() {
  return (
    <div className="flex flex-col gap-24 h-screen w-full items-center justify-center">
      <img alt="midi" src="/assets/midi.svg" />
      <SpeakerNotes>
        Who here know's what MIDI is? Musical Instrument Digital Interface? It
        was invented in the early 80's as a way to connect digital instruments
        to each other, or to computers.
      </SpeakerNotes>
    </div>
  );
}
