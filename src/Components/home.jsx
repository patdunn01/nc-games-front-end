import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";


export default function Home() {
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
        <h1 className="App">Featured Reviews</h1>
        <ul className="reviews-container">
          {reviewData.map((review) => {
            return (
              <div key={review.review_id}>
                <li className="home-page-reviews">
                  Read {review.owner}'s' review of {review.designer}'s{" "}
                  {review.category} game
                  <br></br>
                  <img
                    className="home-page-image"
                    src={review.review_img_url}
                    alt="game review" 
                  />
                  <br></br>
                  <Link className="home-page-review-button" to={`/reviews/${review.review_id}`}>Read Review</Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
