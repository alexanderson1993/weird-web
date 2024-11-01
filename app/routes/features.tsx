import { useEffect, useState } from "react";
import { SpeakerNotes } from "~/components/SpeakerNotes";

import { useAudioRecorder } from "react-audio-voice-recorder";
import Webcam from "react-webcam";
import { useGeolocated } from "react-geolocated";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import geoUrl from "../utils/states.json?url";
import { Canvas } from "@react-three/fiber";
import {
  Sparkles,
  Shadow,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { ClientOnly } from "~/lib/ClientOnly";

export default function Chrome() {
  return (
    <div className="grid grid-cols-2 grid-rows-[repeat(2,50vh)] h-screen items-center justify-center place-items-center">
      <ClientOnly>
        {() => (
          <>
            <Visualizer />
            <Webcam />
            <Geolocation />
            <ThreeDee />
          </>
        )}
      </ClientOnly>
      <SpeakerNotes>
        Now we can access media devices like cameras and microphones, store
        entire LLMs inside browser’s local storage, pinpoint your physical
        location, and render 3D graphics
      </SpeakerNotes>
    </div>
  );
}

const Visualizer = () => {
  const recorder = useAudioRecorder();
  const [Vis, setVis] = useState<any>();
  useEffect(() => {
    async function load() {
      const { LiveAudioVisualizer } = await import("react-audio-visualize");
      setVis(() => LiveAudioVisualizer);
    }

    load();
  }, []);

  useEffect(() => {
    if (!recorder.isRecording) {
      recorder.startRecording();
    }
    return () => {
      recorder.stopRecording();
    };
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      {!recorder.mediaRecorder || !Vis ? null : (
        <Vis
          mediaRecorder={recorder.mediaRecorder}
          width={400}
          height={200}
          fftSize={256}
        />
      )}
    </div>
  );
};

const Geolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const markers = coords
    ? [
        {
          markerOffset: 0,
          name: "Me",
          coordinates: [coords.longitude, coords.latitude] as [number, number],
        },
      ]
    : [];

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies, outline, borders }) => (
          <>
            <Geography geography={outline} fill="#062458" />
            <Geography geography={borders} fill="none" stroke="#FFF" />
          </>
        )}
      </Geographies>

      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates} id={name}>
          <circle r={10} fill="#E42A1D" stroke="#fff" strokeWidth={1} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export const ThreeDee = () => (
  <Canvas camera={{ position: [0, 0, 12], fov: 30 }}>
    <hemisphereLight intensity={0.5} color="white" groundColor="black" />
    <Environment
      files="/assets/evening_road_01_2k.hdr"
      ground={{ height: 5, radius: 40, scale: 20 }}
    />
    <Sphere
      color="white"
      amount={50}
      emissive="green"
      glow="lightgreen"
      position={[1, 1, -1]}
    />
    <Sphere
      color="white"
      amount={30}
      emissive="purple"
      glow="#ff90f0"
      size={0.5}
      position={[-1.5, 0.5, -2]}
    />
    <Sphere
      color="lightpink"
      amount={20}
      emissive="orange"
      glow="#ff9f50"
      size={0.25}
      position={[-1, 0.25, 1]}
    />
    <OrbitControls
      autoRotateSpeed={1}
      autoRotate
      zoomSpeed={0.75}
      minPolarAngle={Math.PI / 2.5}
      maxPolarAngle={Math.PI / 2.55}
    />
  </Canvas>
);

const Sphere = ({
  size = 1,
  amount = 50,
  color = "white",
  emissive,
  glow,
  ...props
}) => (
  <mesh {...props}>
    <sphereGeometry args={[size, 64, 64]} />
    <meshPhysicalMaterial
      roughness={0}
      color={color}
      emissive={emissive || color}
      envMapIntensity={0.2}
    />
    <Sparkles count={amount} scale={size * 2} size={6} speed={0.4} />
    <Shadow
      rotation={[-Math.PI / 2, 0, 0]}
      scale={size * 1.5}
      position={[0, -size, 0]}
      color="black"
      opacity={1}
    />
  </mesh>
);
