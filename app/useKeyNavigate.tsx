import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

/**
 * TODO:
 * https://chromium.googlesource.com/chromium/src/+/HEAD/device/gamepad/xbox_controller_mac.h
 *
 */
const slides = [
  "/",
  "/love-the-web",
  "/localhost",
  "/awesome-web",
  "/chrome-evil",
  "/cant-do-1",
  "/cant-do-2",
  "/cant-do-3",
  "/timer-1",
  "/timer-2",
  "/desktop",
  "/blank-1",
  "/flash-1",
  "/flash-2",
  "/gears",
  "/blank-2",
  "/features",
  "/blank-3",
  "/waveform",
  "/waveform-2",
  "/waveform-3",
  "/web-audio-1",
  "/web-audio-demo",
  "/midi-1",
  "/midi-2",
  "/midi-3",
  "/gamepad-1",
  "/gamepad-2",
  "/dmx",
  "/dmx-2",
  "/dmx-3",
  "/webusb-1",
  "/webusb-2",
  "/webusb-2-and-a-half",
  "/webusb-3",
  "/webusb-4",
  "/webusb-5",
  "/webusb-6",
  "/web-serial",
  "/web-midi",
  "/thorium-1",
  "/thorium-2",
  "/thorium-3",
  "/thorium-4",
  "/chrome-only",
  "/interop",
  "/conclusion",
];
export function useKeyNavigate() {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [broadcastChannel] = useState(new BroadcastChannel("key-navigate"));

  useEffect(() => {
    const controller = new AbortController();
    broadcastChannel.addEventListener(
      "message",
      (event) => {
        navigate(event.data.path, {
          viewTransition: true,
        });
      },
      { signal: controller.signal }
    );

    return () => {
      controller.abort();
    };
  }, [broadcastChannel, navigate]);

  useEffect(() => {
    broadcastChannel.postMessage({ path });
  }, [path, broadcastChannel]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const slideIndex = slides.indexOf(path);
      if (slideIndex === -1) return;

      if (event.key === "ArrowRight") {
        navigate(slides[(slideIndex + 1) % slides.length], {
          viewTransition: true,
        });
      } else if (event.key === "ArrowLeft") {
        navigate(slides[(slideIndex - 1 + slides.length) % slides.length], {
          viewTransition: true,
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, path]);
}
