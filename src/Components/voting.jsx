import { useState } from "react";
import { addVotes } from "../utils/api";

export default function Voting({ votes, review_id }) {
  const [votesChange, setvotesChange] = useState(0);
  const [isUpClicked, setIsUpClicked] = useState(false)
  const [isDownClicked, setIsDownClicked] = useState(false)
  const [err, setErr] = useState(null);

  function upVote() {
    setIsUpClicked(true)
    setIsDownClicked(true)
    setvotesChange((currVotesChange) => currVotesChange + 1);
    addVotes(review_id, 1).catch((err) => {
      setvotesChange((currVotesChange) => currVotesChange - 1);
      setErr("Something went wrong, please try again");
    });
  }

  function downVote() {
    setIsDownClicked(true)
    setIsUpClicked(true)
    setvotesChange((currVotesChange) => currVotesChange - 1);
    addVotes(review_id, -1).catch((err) => {
      setvotesChange((currVotesChange) => currVotesChange + 1);
      setErr("Something went wrong, please try again");
    });
  }

  if (err) {
    return <h4>{err}</h4>;
  }

  return (
    <section>
      <p> Votes {votes + votesChange}</p>
      
      <button className="votes-button__up" onClick={upVote} disabled={isUpClicked}>
        👍
      </button>
      <button className="votes-button__down" onClick={downVote} disabled={isDownClicked}>
        👎
      </button>
    </section>
  );
}

//voting button changes (__up)