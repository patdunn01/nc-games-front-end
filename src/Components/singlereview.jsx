import { getSingleReview } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./commentCard";
import Voting from "./voting"

export default function SingleReview() {
const [reviewData, setReview] = useState([]);
const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const params = useParams();

  useEffect(() => {
    getSingleReview(params.review_id).then((review) => {
      setReview(review);
      setVotes(review.votes);
      setIsLoading(false);
    });
  }, [params.review_id]);

  if (isLoading) {
    return <p>Just Loading...</p>;
  }

  return (
    <div>
      <div key={reviewData.review_id}>
        <h2>
          {reviewData.owner}'s review of {reviewData.designer}'s{" "}
          {reviewData.category} game
        </h2>
        <img
          className="review-image"
          src={reviewData.review_img_url}
          alt={reviewData.title}
        />
        <p className="review-text">{reviewData.review_body}</p>
        <p className="review-text">
          <Voting votes={reviewData.votes} review_id={reviewData.review_id}/>
        </p>
      </div>
      <CommentCard />
    </div>
  );
}