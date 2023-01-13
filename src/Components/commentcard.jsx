import { useState, useEffect } from "react";
import { getSingleReviewComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentAdder from './commentAdder';

export default function CommentCard() {
  const [commentsData, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getSingleReviewComments(params.review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [params.review_id]);

  if (isLoading) {
    return <p>Just Loading the comments bit...</p>;
  }

  if (commentsData.length === 0) {
    return (
      <div>
        <h1>No comments yet</h1>
        <Link to="/reviews">Back to reviews</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Comments</h2>
      <CommentAdder commentsData={commentsData} setComments={setComments}/>
      <div key={commentsData.comment_id}>
        <ul className="comments-container">
          {commentsData.map((comment) => {
            return (
              <div key={comment.comment_id}>
                <li className="comments">
                  <p className="commentHandles">"{comment.body}"</p> 
                  <div className="line"></div>
                  <p className="timestamp">
                    by {comment.author}{" "}
                    {new Date(comment.created_at).toString().slice(4, 24)}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
