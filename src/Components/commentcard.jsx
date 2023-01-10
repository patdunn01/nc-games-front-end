import { useState, useEffect } from "react";
import { getSingleReviewComments } from "../utils/api";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Comment_Card() {
    const [commentsData, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams() 

    useEffect(() => {
        getSingleReviewComments(params.review_id).then((comments) => {
        setComments(comments)
        setIsLoading(false);
      })
    }, [params.review_id]);

    if (isLoading) {
        return <p>Just Loading...</p>;
      }

    if(commentsData.length === 0){
        return (
            <div>
                <h1>No comments yet</h1>
                <Link to="/reviews">Back to reviews</Link>
            </div>
        )
    }

    return (
      <div>
        <h1 className="App">Reviews Comments</h1>
        <div key={commentsData.comment_id}>
        <ul>
          {commentsData.map((comment) => {
            return (
              <div key={comment.comment_id}>
                <li className="comments">
                Username: {comment.author} 
                <br></br>
                Comment: {comment.body}
                <br></br>
                <p className="timestamp">{comment.created_at.slice(0, 10)} | {comment.created_at.slice(11, 16)}
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
  