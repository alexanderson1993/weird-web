import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <SpeakerNotes>
        Those APIs have become pretty ubiquitous, but they aren't the only
        WebAPIs that have been added to the platform. There are some other,
        weirder APIs that you've probably never heard of, and would bet you've
        never used. But I want to emphasize - these are all real APIs,
        documented on MDN with W3C specifications. I'm not making these up.
      </SpeakerNotes>
    </div>
  );
}
