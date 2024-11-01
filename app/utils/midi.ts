// @ts-ignore
import MIDIMessage from "midimessage";

let hasMidiAccess = false;

function getMidiAccess(sysex = true) {
  return typeof window !== "undefined" &&
    window.navigator &&
    typeof window.navigator.requestMIDIAccess === "function"
    ? window.navigator.requestMIDIAccess({ sysex }).then((access) => {
        hasMidiAccess = true;
        return access;
      })
    : new Promise((resolve, reject) => reject(new Error("MIDI Not Available")));
}

const debug = false;
type messageType =
  | "controlchange"
  | "pitchbendchange"
  | "noteon"
  | "noteoff"
  | "keypressure";
type Address =
  | {
      name?: string;
      channel?: number;
      messageType: messageType;
      controllerNumber?: number;
      key?: number;
    }
  | { all: boolean };
interface Message {
  messageType: messageType;
  velocity: number;
  pitchBend: number;
  controllerValue: number;
  controllerNumber: number;
}
type Sub = (value: ReturnType<typeof transformMidiMessage>) => void;

const subscribers = new Set<Sub>();

function transformMidiMessage(message: Message) {
  const {
    messageType,
    velocity,
    pitchBend,
    controllerValue,
    controllerNumber,
  } = message;
  switch (messageType) {
    case "controlchange":
      return {
        ...message,
        controller: controllerNumber,
        value: controllerValue,
      };
    case "pitchbendchange":
      return { ...message, value: pitchBend / 32512 };
    case "noteon":
      return { ...message, value: Math.min(1, velocity) };
    default:
      throw new Error("Unhandled message type");
  }
}

function handleMidiMessage(e: MIDIMessageEvent) {
  const message = MIDIMessage(e);
  const { name: targetName } = e.target as MIDIInput;
  if (debug) {
    const {
      channel,
      messageType,
      key,
      velocity,
      controllerNumber,
      controllerValue,
      channelModeMessage,
      pressure,
      pitchBend,
    } = message;
    console.info({
      targetName,
      channel,
      messageType,
      key,
      velocity,
      controllerNumber,
      controllerValue,
      channelModeMessage,
      pressure,
      pitchBend,
    });
  }
  for (const sub of subscribers) {
    sub(transformMidiMessage(message));
  }
}

let abortController = new AbortController();
function mapDevices<T extends "input" | "output">(
  io: T extends "input" ? MIDIInputMap : MIDIOutputMap,
  which: T
) {
  type OutputType = T extends "input" ? MIDIInput : MIDIOutput;
  const devices: OutputType[] = [];
  const deviceNames: string[] = [];
  // biome-ignore lint/complexity/noForEach: <explanation>
  io.forEach((i) => {
    if (!i.name) return;
    if (!deviceNames.includes(i.name)) {
      console.info("Found device", i.name, which);
      deviceNames.push(i.name);
    }
    if (i instanceof MIDIInput) {
      i.addEventListener("midimessage", handleMidiMessage, {
        signal: abortController.signal,
      });
    }
    devices.push(i as OutputType);
  });
  return devices;
}

function mapMidiIO(access: MIDIAccess) {
  return {
    inputs: mapDevices(access.inputs, "input"),
    outputs: mapDevices(access.outputs, "output"),
  };
}

// Message Types
const messageTypeValues = {
  noteoff: 0x80,
  noteon: 0x90,
  keypressure: 0xa0, // Polyphonic Key Pressure (Aftertouch)
  controlchange: 0xb0,
  programchange: 0xc0,
  channelpressure: 0xd0, // Channel Pressure (After-touch)
  pitchbendchange: 0xe0,
};

// Channel mode message values
// [
//   'allsoundoff', // All Sound Off.
//   'resetallcontrollers', // Reset All Controllers.
//   'localcontroloff', // Local Control Off.
//   'localcontrolon', // Local Control On.
//   'allnotesoff', // All Notes Off.
//   'omnimodeoff', // Omni Mode Off.
//   'omnimodeon', // Omni Mode On.
//   'monomodeon', // Mono Mode On (Poly Off).
//   'polymodeon' // Poly Mode On (Mono Off)
//   ]

// Relevant values from message
// channel: Number (0-127) - MIDI Channel Number.
// messageType: String - Type of message. Possible values defined below.
// key: Number (0-127) - The key (note) number. Defined on -noteon,noteoff,keypressure messages.
// velocity: Number (0-127) - Velocity. Defined on noteon,noteoff messages.
// controllerNumber: Number (0-127) - Controller Number. Controller numbers 120-127 are reserved as "Channel Mode Messages".
// controllerValue: Number (0-127) Controller Value. Has various meanings based on controllerNumber.
// channelModeMessage: String - Channel Mode Message. Specific messages for Channel Modes based on controllerNumber. Possible values defined below.
// pressure: Number (0-127) - Pressure value.
// pitchBend: Number (0-16383) - Pitch Bend value. Center (no pitch change) is 8192.

export function addMidiSubscriber(sub: Sub) {
  if (!hasMidiAccess) {
    getMidiAccess().then((res) => {
      abortController.abort();
      abortController = new AbortController();
      mapMidiIO(res as MIDIAccess);
    });
  }
  subscribers.add(sub);
  return () => subscribers.delete(sub);
}
