import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <div className="relative w-[500px]">
        <img
          src="/assets/clock.png"
          className="w-full [view-transition-name:timer]"
        />
        <img
          src="/assets/ban.png"
          className="z-10 w-full absolute inset-0 drop-shadow-lg scale-[1.5] opacity-0 [view-transition-name:ban]"
        />
      </div>
      <SpeakerNotes>
        Heck, last year I gave a talk about how I wanted to create a local-first
        timer website that would send you a push notification when the timer was
        done, without needing a server. Feels like something you should be able
        to just do with a Service Worker, but it’s actually impossible without a
        server processing the timers in the background. The web is limited.
      </SpeakerNotes>
    </div>
  );
}
