import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

export default function Reviews() {
  const [reviewData, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [review_id, setReviewID] = useState(0);
  

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    }).then(setReviewID);
  }, []);

  if (isLoading) {
    return <p>Just Loading...</p>;
  }

  return (
    <header>
      <div>
        <h1 className="App">Reviews</h1>
        <ul>
          {reviewData.map((review) => {
            return (
              <div key={review.review_id}>
                <li className="reviews">
                  Read {review.owner}'s' review of {review.designer}'s{" "}
                  {review.category} game
                  <br></br>
                  Votes : {review.votes}
                  <br></br>
                  <img
                    className="review-page-image"
                    src={review.review_img_url}
                    alt="game review" 
                  />
                  <br></br>
                  <button
                    className="review-button"
                    onClick={(event) => {
                      event.preventDefault();
                      console.log(review_id, "line 46");
                      setReviewID(review.review_id);
                      console.log(review_id, "line 48");
                    }}
                  >
                    View
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
