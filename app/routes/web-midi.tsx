import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Thorium() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/midi-app.jpg"
        className="w-[1000px] [view-transition-name:me]"
        alt=""
      />
      <SpeakerNotes>
        And back to MIDI and Web Audio, here's a little digital audio
        workstation called Signal. It's open source, and it lets you hook your
        MIDI instruments up to compose music, right in your web browser.
      </SpeakerNotes>
    </div>
  );
}
