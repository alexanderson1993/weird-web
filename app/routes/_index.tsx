import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SpeakerNotes } from "~/components/SpeakerNotes";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="flex h-screen items-center justify-center">
			<Link to="/love-the-web" unstable_viewTransition>
				<img
					src="/assets/Me.jpg"
					className="w-96 h-96 [view-transition-name:me]"
				/>
			</Link>
			<SpeakerNotes>Hi. I'm Alex. And I love the web.</SpeakerNotes>
		</div>
	);
}
