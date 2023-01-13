import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-reviews-04ed.onrender.com/api",
});

export const getReviews = () => {
  return reviewsApi.get("/reviews").then((res) => {
    return res.data.review;
  });
};

export const getSingleReview = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getSingleReviewComments = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const addVotes = (review_id, increaseVotes) => {
  return reviewsApi.patch(`/reviews/${review_id}`, {
    inc_votes: increaseVotes,
  });
};

export const addComments = (review_id, createsNewComment) => {
  return reviewsApi.post(`/reviews/${review_id}/comments`, {
    body: createsNewComment,
    user_name: "tickle122",
  });
};