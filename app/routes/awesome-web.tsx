import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/safari.svg"
        className="w-[400px] [view-transition-name:safari]"
        alt="Safari Browser Logo"
      />
      <img
        src="/assets/chrome.png"
        className="w-[400px] [view-transition-name:chrome]"
        alt="Chrome Browser Logo"
      />
      <img
        src="/assets/firefox.svg"
        className="w-[400px] [view-transition-name:firefox]"
        alt="Firefox Browser Logo"
      />
      <SpeakerNotes>
        The fact that you can do that is in large part because of the web
        advocates who work tirelessly to add APIs and maintain compatibility
        between all of the browsers that we use every day.
      </SpeakerNotes>
    </div>
  );
}
