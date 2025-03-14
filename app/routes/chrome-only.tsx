import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/chrome.png"
        className="w-[400px] [view-transition-name:chrome]"
        alt="Chrome Browser Logo"
      />
      <SpeakerNotes>
        Now, I do need to come clean. WebMIDI, WebUSB, and WebSerial only really
        work on Chrome. That might be a bummer, but lets be real - it' awesome
        that you can do these things in browsers at all. And while showing cool
        demos is really awesome and fun, the real point of my talk is how many
        great APIs are available for us in all browsers today, right now.
      </SpeakerNotes>
    </div>
  );
}
