import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
	return (
		<div className="flex h-screen items-center justify-center gap-16">
			<img
				src="/assets/chrome.png"
				className="w-[600px] [view-transition-name:me]"
				style={{
					filter:
						"sepia(1) invert() hue-rotate(140deg) saturate(2) contrast(4) brightness(0.8)",
				}}
			/>
			<img
				src="/assets/spy.png"
				className="absolute bottom-0 w-[300px] [view-transition-name:spy]"
			/>
			<SpeakerNotes>
				But there might have been some things you wanted to do that browsers
				just couldn’t do. After all, they’re basically remote code execution
				engines with cute logos, so browsers need to take security and privacy
				very seriously.
			</SpeakerNotes>
		</div>
	);
}
