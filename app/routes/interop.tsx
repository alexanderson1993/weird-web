import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <img
        src="/assets/interop.jpg"
        className="w-[700px] [view-transition-name:safari]"
        alt="Interop"
      />
      <SpeakerNotes>
        If you aren't familiar, the Web Interop project writes tests each year
        for all the major browsers to try to pass. Focus areas include things
        like the Navigation API, Dialog elements, view transitions, the :has
        selector, CSS popovers and anchors..., pointer events. Thanks to the
        tireless efforts of these web advocates, we are in a golden era of
        building great user experiences using web platform primitives.
      </SpeakerNotes>
    </div>
  );
}
