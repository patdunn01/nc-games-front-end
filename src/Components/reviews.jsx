import { useState, useEffect } from "react";
import axios from 'axios'

export default function Reviews() {
  const [reviewData, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`https://nc-games-reviews-04ed.onrender.com/api/reviews`)
      .then((data) => {
        console.log(data.data.review[0]);
        setReviews(data.data.review);
      });
  }, []);

  return (
    <header>
      <div>
        <h1 className="App">Reviews</h1>
        <ul>
          {reviewData.map((review) => {
            return (
            <div><li className="reviews" key={Math.random()}>
                 {review.owner}'s' review
                </li><button className="review_button">View</button>
                </div>)
          })}
        </ul>
      </div>
    </header>
  );
}
