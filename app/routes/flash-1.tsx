import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function LoveTheWeb() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/future-splash.png"
        className="w-[600px] [image-rendering:pixelated] [view-transition-name:me]"
      />
      <SpeakerNotes>
        People have been trying to add more capabilities to websites for a long
        time. Who’s heard of FutureSplash Animator? Nobody? Oh, wait… I meant
        Flash? Yeah, that and Java Applets were the OG browser plugins for
        making websites do things they shouldn’t do. From the 1990s to 2017,
        Flash could access the camera, file system, and do all kinds of other
        things that were impossible with browsers. Really handy stuff. Too bad
        it was slow, insecure, and lacked privacy controls.
      </SpeakerNotes>
    </div>
  );
}
