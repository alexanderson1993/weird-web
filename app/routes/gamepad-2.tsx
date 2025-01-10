import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Gamepad() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <video
        controls={false}
        autoPlay
        muted
        loop
        src="/assets/gamepad.mp4"
        className="w-[1000px] [view-transition-name:me]"
      />
      <SpeakerNotes>
        When you connect a gamepad, your browser is able to query the state of
        each of the buttons. That means it doesn't fire events when some action
        happens on the gamepad - you have to set up a loop and request what
        buttons are pressed and what the axis values are. Not a huge deal for
        games, since you're likely running a loop anyway. It can even send
        haptic events, which fire off rumble packs.
      </SpeakerNotes>
    </div>
  );
}
