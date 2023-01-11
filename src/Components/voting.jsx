import { useState } from "react";
import { addVotes } from "../utils/api";

export default function Voting({ votes, review_id }) {
  const [votesChange, setvotesChange] = useState(0);
  const [err, setErr] = useState(null);

  function upVote() {
    setvotesChange((currVotesChange) => currVotesChange + 1);
    addVotes(review_id, 1).catch((err) => {
      setvotesChange((currVotesChange) => currVotesChange - 1);
      setErr("Something went wrong, please try again");
    });
  }

  function downVote() {
    setvotesChange((currVotesChange) => currVotesChange - 1);
    addVotes(review_id, -1).catch((err) => {
      setvotesChange((currVotesChange) => currVotesChange + 1);
      setErr("Something went wrong, please try again");
    });
  }

  if (err) {
    return <p>{err}</p>;
  }

  return (
    <section>
      <p> Votes {votes + votesChange}</p>
      <button className="votes-button" onClick={upVote}>
        👍
      </button>
      <button className="votes-button" onClick={downVote}>
        👎
      </button>
    </section>
  );
}
