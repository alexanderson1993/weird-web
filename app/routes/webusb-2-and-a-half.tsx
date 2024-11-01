import { SpeakerNotes } from "~/components/SpeakerNotes";
import { codeToHtml } from "shiki";
import { useLoaderData } from "@remix-run/react";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/permission.jpg"
        className="w-[600px] [view-transition-name:webusb]"
      />

      <SpeakerNotes>
        Here's what that looks like for the user. They can see any devices that
        match the filter and choose the one they want to interface with.
      </SpeakerNotes>
    </div>
  );
}
