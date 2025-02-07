import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function LoveTheWeb() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/localhost.webp"
        className="w-[600px] [view-transition-name:me]"
      />
      <SpeakerNotes>
        And this is what makes the web so great. We’ve all felt how cool it is
        to code up a website and send a link to our friends to show it off.
      </SpeakerNotes>
    </div>
  );
}
