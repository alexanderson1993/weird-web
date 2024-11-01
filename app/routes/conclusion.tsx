import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Thorium() {
  return (
    <div className="flex h-screen items-center justify-center gap-4 flex-col">
      <img src="/assets/qr.svg" className="w-[600px]" alt="qr" />
      <p className="font-mono text-2xl">https://weird-web.ralexanderson.com</p>
      <p className="font-mono text-2xl">
        https://github.com/alexanderson1993/weird-web
      </p>
      <SpeakerNotes>So. Build weird stuff. The End.</SpeakerNotes>
    </div>
  );
}
