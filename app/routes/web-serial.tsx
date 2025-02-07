import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Thorium() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/solder.png"
        className="w-[500px] [view-transition-name:me]"
        alt=""
      />
      <SpeakerNotes>
        Here's another use-case I've seen - the new IFixIt soldering iron has a
        USB port. When you plug it into your computer and go to the
        configuration website, the site connects to it using the even more
        low-level Web Serial API. So you can configure the soldering iron right
        from your web browser. And the great thing is, you don't have to
        download any extra programs or drivers.
      </SpeakerNotes>
    </div>
  );
}
