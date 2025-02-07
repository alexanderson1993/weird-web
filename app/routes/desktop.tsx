import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <img src="/assets/electron.png" className=" w-[400px]" />
      <img src="/assets/tauri.svg" className=" w-[400px]" />
      <SpeakerNotes>
        We get around that by using desktop app wrappers like Electron and Tauri
        that combine a browser with a native backend, which gives apps access to
        just about anything on the computer.
      </SpeakerNotes>
    </div>
  );
}
