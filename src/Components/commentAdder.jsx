import { useState } from "react";
import { addComments } from "../utils/api";
import { useParams } from "react-router-dom";

export default function CommentAdder({ commentsData, setComments }) {
  const [newComment, setNewComments] = useState("");

  const params = useParams();
  const dateFind = new Date().toString().slice(4, 24)

  function addNewComment(event) {
    event.preventDefault();
    if (newComment.length > 0) {
      setComments([{
        author: 'tickle122',
        body : newComment,
        created_at: dateFind,
        comment_id: new Date()
      }, ...commentsData])
      addComments(params.review_id, newComment);
    } 
  }

  return (
    <form>
      <input
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
      <button className="cancel-button" type="reset">
        Cancel
      </button>
      <button className="add-comment-button" type="submit" onClick={addNewComment}>
        Comment
      </button>
    </form>
  );
}


//moment - date library