import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function LoveTheWeb() {
	return (
		<div className="flex h-screen items-center justify-center gap-16">
			<img
				src="/assets/gearslogo.png"
				alt="Gears logo"
				className="w-[600px] [view-transition-name:me]"
			/>
			<SpeakerNotes>
				Anyone remember Gears? Yeah, back in 2007 Google released another plugin
				that basically side loaded a bunch of new web apis, like local storage,
				JavaScript workers, and geolocation.
			</SpeakerNotes>
		</div>
	);
}
