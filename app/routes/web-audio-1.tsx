import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img src="/assets/web-audio.svg" alt="web-audio" />
      <SpeakerNotes>
        It lets you take audio sources, like microphones, audio files, or
        generated waveforms, process them using filters and transformations,
        like adding reverb or changing the pitch, and then output them through
        speakers or headphones.
      </SpeakerNotes>
    </div>
  );
}
