import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function LoveTheWeb() {
	return (
		<div className="flex h-screen items-center justify-center gap-16">
			<img
				src="/assets/Me.jpg"
				className="w-96 h-96 [view-transition-name:me]"
			/>
			<span className="text-[120px]">❤️</span>
			<img src="/assets/web.png" className="w-96 h-96" />
			<SpeakerNotes>Hi. I'm Alex. And I love the web.</SpeakerNotes>
		</div>
	);
}
