import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Thorium() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/tactical.jpg"
        className="w-screen h-screen object-contain [view-transition-name:me]"
      />
      <SpeakerNotes>
        Web Audio lets me play sounds with different effects, like slight pitch
        shifting or reverb so every time your fire your phasers or torpedos it
        sounds just a little different. And I can mix the sound effects to
        different channels, to provide surround sound for the sound effects
        based on where the sound happened in space. (yes, we let sound happen in
        space, it's more fun that way)
      </SpeakerNotes>
    </div>
  );
}
