import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="assets/youcanjustdothings.jpg"
        className="inset-0 w-screen h-screen object-cover fixed"
        alt="You can just do things"
      />
      <SpeakerNotes>
        We're getting to the point where, in web browsers, you can just do
        things. And these aren't the only WebAPIs that have been added to the
        platform. There are some other, weirder APIs that you've probably never
        heard of, and would bet you've never used. But I want to emphasize -
        these are all real APIs, documented on MDN with W3C working group
        specifications. I'm not making these up.
      </SpeakerNotes>
    </div>
  );
}
