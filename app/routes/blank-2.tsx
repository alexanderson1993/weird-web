import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Chrome() {
	return (
		<div className="flex h-screen items-center justify-center gap-24">
			<SpeakerNotes>
				It took a long time, but eventually browser engines realized there was
				so much more they could provide website authors without compromising on
				security. We’re living in a golden age of Web APIs.
			</SpeakerNotes>
		</div>
	);
}
