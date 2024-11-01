import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/webusb.svg"
        className="w-[400px]  [view-transition-name:webusb]"
        alt="webUSB"
      />

      <SpeakerNotes>
        So how do I get my browser to speak some arcane protocol like DMX? With
        a fancy little API called WebUSB. It gives me access to USB devices
        connected to my computer, and lets me send commands and listen to
        messages from the devices I allow. I'm gonna guess you've never played
        around with sending USB messages, so let's dig in a bit.
      </SpeakerNotes>
    </div>
  );
}
