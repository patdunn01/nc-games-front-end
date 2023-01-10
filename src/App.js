import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, useParams } from "react";
import './App.css';
import Header from './Components/header';
import Nav from './Components/nav';
import Reviews from './Components/reviews';
import Users from './Components/users';
import Categories from './Components/categories';
import SingleReview from './Components/singlereview';
import Comment_Card from './Components/commentcard';

function App() {

  const [reviews, setReviewID] = useState(0);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
              <Route path="/reviews" element={<Reviews setReviewID={setReviewID} /> }  />
              <Route path="/users" element={<Users />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/reviews/:review_id" element={<SingleReview />} />
              <Route path="/reviews/:review_id/comments" element={<Comment_Card />} />
      </Routes>
    </div>
  );
}

export default App;
