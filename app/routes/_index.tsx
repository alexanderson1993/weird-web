import { type MetaFunction, Link } from "react-router";
import { SpeakerNotes } from "~/components/SpeakerNotes";

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Link to="/love-the-web" viewTransition>
        <img
          src="/assets/Me.jpg"
          className="w-96 h-96 [view-transition-name:me]"
          alt="me"
        />
      </Link>
      <SpeakerNotes>Hi. I'm Alex. And I love the web.</SpeakerNotes>
    </div>
  );
}
