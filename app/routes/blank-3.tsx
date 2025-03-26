import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <h1 className="font-bold text-6xl">You can just do things.</h1>
      <SpeakerNotes>
        Those APIs have become pretty ubiquitous, but they aren't the only
        WebAPIs that have been added to the platform. There are some other,
        weirder APIs that you've probably never heard of, and would bet you've
        never used. But I want to emphasize - these are all real APIs,
        documented on MDN with W3C working group specifications. I'm not making
        these up.
      </SpeakerNotes>
    </div>
  );
}
