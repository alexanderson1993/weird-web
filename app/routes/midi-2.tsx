import { useEffect, useState } from "react";
import { SpeakerNotes } from "~/components/SpeakerNotes";
import { addMidiSubscriber } from "~/utils/midi";

export default function App() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    const unsub = addMidiSubscriber((message) => {
      setMessages((messages) => [...messages, message].slice(-50));
    });
    return () => {
      unsub();
    };
  });
  return (
    <div className="h-screen w-full">
      <pre className="absolute bottom-1/4 left-1/2 -translate-x-1/2">
        {messages
          .map(({ channel, messageType, key, velocity, value }) =>
            JSON.stringify({ channel, messageType, key, velocity, value })
          )
          .join("\n")}
      </pre>
      <div className="w-full h-1/3 from-white to-transparent bg-gradient-to-b z-10 absolute " />
      <SpeakerNotes>
        (Type on the MIDI device) MIDI works by sending different types of
        messages with different attributes. So a "noteon" or "noteoff" message
        might be sent by a keyboard with a key and velocity, or a
        "controlchange" message sent by a knob with a value. Web MIDI works by
        enumerating the devices connected to the computer. You can then add
        listeners for these messages and then do something with those messages.
        I was using it to trigger the Web Audio API, but it can control whatever
        you want.
      </SpeakerNotes>
    </div>
  );
}
