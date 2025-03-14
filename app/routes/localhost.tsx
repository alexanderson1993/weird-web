import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function LoveTheWeb() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/localhost.webp"
        className="w-[600px] [view-transition-name:me]"
      />
      <SpeakerNotes>
        You know what makes the web so great? It's universal. It's world wide!
        We’ve all felt how cool it is to code up a website and send a link to
        our friends to show it off. And the best part? They didn't even have to
        download or install anything special.
      </SpeakerNotes>
    </div>
  );
}
