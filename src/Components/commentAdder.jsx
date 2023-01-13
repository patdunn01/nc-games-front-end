import { useState } from "react";
import { addComments } from "../utils/api";
import { useParams } from "react-router-dom";

export default function CommentAdder({ commentsData, setComments }) {
  const [newComment, setNewComments] = useState("");
  const [err, setErr] = useState(null);

  const params = useParams();
  const dateFind = new Date().toString().slice(4, 24);

  function emptyComments() {
    setNewComments("");
  }

  function addNewComment(event) {
    setNewComments("");
    event.preventDefault();
    const date = new Date();
    if (newComment.length > 1) {
      setComments([
        {
          author: "tickle122",
          body: newComment,
          created_at: dateFind,
          comment_id: date,
        },
        ...commentsData,
      ]);
      addComments(params.review_id, newComment).catch((err) => {
        setComments((currComments) =>
          currComments.filter((comment) => {
            return comment.comment_id !== date;
          })
        );
        setErr("Something went wrong, please try again");
      });
    }
  }

  if (err) {
    return <h4>{err}</h4>;
  }

  return (
    <form>
      <textarea
        value={newComment}
        onChange={(event) => {
          setNewComments(event.target.value);
        }}
        className="commentAdder"
        id="commentAdder"
        name="commentAdder"
        type="text"
        placeholder="Add a comment..."
      />
      <br></br>
      <button className="cancel-button" type="reset" onClick={emptyComments}>
        cancel
      </button>
      <button
        className="add-comment-button"
        type="submit"
        onClick={addNewComment}
      >
        Comment
      </button>
    </form>
  );
}

//moment - date library
