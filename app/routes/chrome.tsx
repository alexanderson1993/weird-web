import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/chrome.png"
        className="w-[600px] [view-transition-name:me]"
      />
      <img
        src="/assets/spy.png"
        className="absolute top-full w-[300px] [view-transition-name:spy]"
      />
      <SpeakerNotes>
        But there might have been some things you wanted to do that browsers
        just couldn’t do. After all, they’re basically remote code execution
        engines with cute logos, so browsers need to take security and privacy
        very seriously.
      </SpeakerNotes>
    </div>
  );
}
