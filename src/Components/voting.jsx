import { useState } from "react";
import { addVotes } from "../utils/api";

export default function Voting({ votes, review_id }) {
  const [votesChange, setvotesChange] = useState(0);

  function upVote() {
    addVotes(review_id, 1).then(() => {
      setvotesChange((currVotesChange) => currVotesChange + 1);
    });
  }

  function downVote() {
    addVotes(review_id, -1).then(() => {
      setvotesChange((currVotesChange) => currVotesChange - 1);
    });
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
