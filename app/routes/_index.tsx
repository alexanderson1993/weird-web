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
      <SpeakerNotes>
        Hi. I'm Alex. I make fancy websites for an agency called Echobind - you
        should hire us to help you make fancy websites. And I love the web. And
        I want to talk about how we are truly in a golden age of web APIs.
      </SpeakerNotes>
    </div>
  );
}
