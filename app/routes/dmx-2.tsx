import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/dmx.svg"
        className="w-[400px] [view-transition-name:webusb]"
        alt="DMX"
      />
      <SpeakerNotes>
        So how am I controlling this light? The light itself actually runs off
        an industry standard lighting control protocol called Digital Multiplex,
        DMX512. It's basically a bus, where each channel of each device gets a
        number, and then you daisy-chain the devices together. Each chain can
        have a max of 512 channels, hence DMX 512.
      </SpeakerNotes>
    </div>
  );
}
