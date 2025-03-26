import type * as Route from "./+types.webusb-3";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import { codeToHtml } from "shiki";

export async function clientLoader() {
  return {
    code: await codeToHtml(
      `// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

namespace device {

class XboxControllerMac final : public AbstractHapticGamepad {
 public:
  enum LEDPattern {
    LED_OFF = 0,

    // 2 quick flashes, then a series of slow flashes (about 1 per second).
    LED_FLASH = 1,

    // Flash three times then hold the LED on. This is the standard way to tell
    // the player which player number they are.
    LED_FLASH_TOP_LEFT = 2,
    LED_FLASH_TOP_RIGHT = 3,
    LED_FLASH_BOTTOM_LEFT = 4,
    LED_FLASH_BOTTOM_RIGHT = 5,

    ...`,
      {
        lang: "ts",
        theme: "github-light",
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
        Would you believe it - code very similar to this exists in every modern
        web browser as part of the Web Gamepad API. That's right, your web
        browser knows what an Xbox is. Kinda weird, if you think about it.
      </SpeakerNotes>
    </div>
  );
}
