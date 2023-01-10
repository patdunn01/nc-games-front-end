import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import './App.css';
import Header from './Components/header';
import Nav from './Components/nav';
import Reviews from './Components/reviews';
import Users from './Components/users';
import Categories from './Components/categories';
import SingleReview from './Components/singlereview';

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
      </Routes>
    </div>
  );
}

export default App;
