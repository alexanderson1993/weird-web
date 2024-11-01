import type * as Route from "./+types.webusb-5";

import { SpeakerNotes } from "~/components/SpeakerNotes";
import { codeToHtml } from "shiki";

export async function clientLoader() {
  return {
    code: await codeToHtml(
      `function update(channels: number[]) {
  // Make sure we're sending 512 channels
  for (let i = 0; i < 512; i++) {
    universe[i] = Math.round(channels[i]) || 0;
  }
  // Send the message
  if (lightingDevice.opened) {
    return lightingDevice.transferOut(
      2,
      Uint8Array.from([...header, ...universe, ENTTEC_PRO_END_OF_MSG])
    );
  }
  return Promise.resolve({ status: "stall" });
}`,
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
        Then I can create a generic function which I can call with the values I
        want each channel to be at. So long as the channels I've configured on
        my devices match the channels in my app, they'll update to whatever
        values I've set here.
      </SpeakerNotes>
    </div>
  );
}
