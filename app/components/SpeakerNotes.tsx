import { createContext, useContext, useEffect, useState } from "react";

const SpeakerNotesContext = createContext(false);

export function SpeakerNotesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [speakerNotes, setSpeakerNotes] = useState(false);

  useEffect(() => {
    const abortSignal = new AbortController();
    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "n") {
          setSpeakerNotes((notes) => !notes);
        }
      },
      { signal: abortSignal.signal }
    );

    return () => {
      abortSignal.abort();
    };
  }, []);

  return (
    <SpeakerNotesContext.Provider value={speakerNotes}>
      {children}
    </SpeakerNotesContext.Provider>
  );
}

export function SpeakerNotes({ children }: { children: React.ReactNode }) {
  const shown = useContext(SpeakerNotesContext);
  if (!shown) return null;

  return (
    <div className="fixed w-full h-[30vh] bg-black/70 text-white bottom-0 p-4 overflow-y-auto text-3xl font-mono z-50">
      {children}
    </div>
  );
}
