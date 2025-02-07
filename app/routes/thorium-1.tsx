import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Thorium() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/Triquetra.svg"
        className="w-[600px] [view-transition-name:webusb]"
      />

      <SpeakerNotes>
        You might be wondering - why the heck am I building sites with WebAudio,
        Web MIDI, Web Gamepad, and WebUSB-controlled DMX drivers into a web app?
        I'm actually building a spaceship bridge simulator game called Thorium
        that you play in your web browser. Players might be distributed across
        the world, and I wanted an easy way for them all to have a fully
        immersive experience.
      </SpeakerNotes>
    </div>
  );
}
