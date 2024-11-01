import { SpeakerNotes } from "~/components/SpeakerNotes";
import { codeToHtml } from "shiki";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return {
    code: await codeToHtml(
      `const lightingDevice = await navigator.usb.requestDevice({
  filters: [{ vendorId: 0x403, productId: 0x6001 }],
});

await lightingDevice.open();
await lightingDevice.claimInterface(0);`,
      {
        lang: "ts",
        theme: "github-dark",
      }
    ),
  };
}

export default function Chrome() {
  const { code } = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen items-center justify-center gap-24">
      <div
        className="[view-transition-name:code]"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: code }}
      />

      <SpeakerNotes>
        First thing to do is request the devices I want. You're able to filter
        based on vendor and even a specific product, to make sure your app only
        interfaces with the devices it expects to. This is what opens that popup
        and lets the user decide if they want to connect a device. If the user
        agrees, then we can open the device and claim the interface so we can
        talk to it.
      </SpeakerNotes>
    </div>
  );
}
