import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/chrome.png"
        className="w-[400px] [view-transition-name:me]"
        alt="Chrome Browser Logo"
      />
      <img
        src="/assets/safari.svg"
        className="w-[400px] [view-transition-name:me]"
        alt="Safari Browser Logo"
      />
      <img
        src="/assets/firefox.svg"
        className="w-[400px] [view-transition-name:me]"
        alt="Firefox Browser Logo"
      />
      <SpeakerNotes>
        And I want to highlight that I'm not just talking about doing really
        weird stuff - though certainly that's fun. Rather, the point of my talk
        is to consider using tools and APIs that browsers provide before
        reaching for libraries or frameworks or desktop wrappers. Things like
        the Navigation API, Dialog elements, view transitions, CSS popovers and
        anchors... we're in a golden era of building great user experiences
        using web platform primitives. Using the Platform makes our sites
        faster, more powerful, more accessible, and more maintainable.
      </SpeakerNotes>
    </div>
  );
}
