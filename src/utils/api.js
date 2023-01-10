import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-reviews-04ed.onrender.com/api",
});

export const getReviews = () => {
  return reviewsApi
    .get("/reviews")
    .then((res) => {
      console.log(res)
      return res.data.review;
    });
};

export const getSingleReview = (review_id) => {
  return reviewsApi
    .get(`/reviews/${review_id}`)
    .then((res) => {
      return res.data.review;
    });
};

