import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { useKeyNavigate } from "~/useKeyNavigate";
import { SpeakerNotesProvider } from "~/components/SpeakerNotes";
import { DmxContext, useUSBDMX } from "~/utils/dmx";
import { Button } from "~/components/ui/button";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  useKeyNavigate();
  const device = useUSBDMX(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-900 dark:text-white">
        {!device.ready ? (
          <Button
            type="button"
            onClick={async () => {
              await device.activate();
            }}
          >
            Activate
          </Button>
        ) : (
          <DmxContext.Provider value={device}>
            <SpeakerNotesProvider>{children}</SpeakerNotesProvider>
          </DmxContext.Provider>
        )}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
