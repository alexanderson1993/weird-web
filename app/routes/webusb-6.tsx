import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img
        style={{
          filter: "invert() hue-rotate(180deg)",
        }}
        src="/assets/stadia.jpg"
        className="w-[1000px] [view-transition-name:me]"
        alt="Stadia Controller"
      />

      <SpeakerNotes>
        I'm not the only one to put Web USB to work. The Google Stadia team made
        this website which lets you flash new firmware to your Stadia
        controller. Coz, you know, it would be a shame for those controllers to
        go to waste. All you have to do is plug it in and go to their website,
        and they take care of everything.
      </SpeakerNotes>
    </div>
  );
}
