import type * as Route from "./+types.webusb-3";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import { codeToHtml } from "shiki";

export async function clientLoader() {
  return {
    code: await codeToHtml(
      `// Send a message to the device to take control of it
lightingDevice.controlTransferOut({
  // Use the standardized USB Communication Device Class protocol
  requestType: "class",
  // The destination of this request is the interface
  // (instead of the entire device or a specific endpoint)
  recipient: "interface",
  // CDC: Communication Device Class
  // 0x22: SET_CONTROL_LINE_STATE
  // RS-232 signal used to tell the USB device
  // that the computer is now present.
  request: 0x22,
  // Set Data Terminal Ready signal to true
  // telling the device the computer wants to send a signal
  value: 0x01,
  // Interface #0
  index: 0x00,
});`,
      {
        lang: "ts",
        theme: "github-dark",
      }
    ),
  };
}

export default function Chrome({ loaderData: { code } }: Route.ComponentProps) {
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <div
        className="[view-transition-name:code]"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: code }}
      />

      <SpeakerNotes>
        Then we have to do a bit of ceremony to let the device know we want to
        talk to it.
      </SpeakerNotes>
    </div>
  );
}
