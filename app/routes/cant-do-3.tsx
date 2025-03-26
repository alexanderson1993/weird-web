import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/write.png"
        className="w-[300px] [view-transition-name:write]"
      />
      <img
        src="/assets/server.png"
        className="w-[300px] [view-transition-name:server]"
      />
      <img
        src="/assets/package.png"
        className="w-[300px] [view-transition-name:package]"
      />
      <SpeakerNotes>
        That means, unlike Desktop apps, web browsers can’t just write to the
        file system, open an HTTP server, or send UDP packets. ... There's a
        joke there, but you might not get it.
      </SpeakerNotes>
    </div>
  );
}
