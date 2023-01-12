import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";


export default function Reviews() {
  const [reviewData, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <p>Just Loading...</p>;
  }

  return (
    <header>
      <div>
        <h1 className="App">Reviews</h1>
        <ul className="reviews-container">
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
                </li>
                <Link className="review-button" to={`/reviews/${review.review_id}`}>View</Link>
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
