import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Thorium() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        src="/assets/bridge.jpg"
        className="w-[800px] [view-transition-name:me]"
      />
      <SpeakerNotes>
        And WebDMX let's users control their own DMX lights so their lighting
        can respond as the ship goes to red alert, is hit with weapons, or jumps
        to warp.
      </SpeakerNotes>
    </div>
  );
}
