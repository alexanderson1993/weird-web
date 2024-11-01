import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
	return (
		<div className="flex h-screen items-center justify-center gap-16">
			<img
				src="/assets/write.png"
				className="w-[500px] [view-transition-name:write]"
			/>
			<img
				src="/assets/spy.png"
				className="absolute top-full w-[300px] [view-transition-name:spy]"
			/>
			<SpeakerNotes>
				That means, unlike Desktop apps, web browsers can’t just write to the
				file system, send UDP packets, or open an HTTP server.
			</SpeakerNotes>
		</div>
	);
}
