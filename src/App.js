import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home'
import Header from './Components/header';
import Nav from './Components/nav';
import Reviews from './Components/reviews';
import Users from './Components/users';
import Categories from './Components/categories';
import SingleReview from './Components/singlereview';
import CommentCard from './Components/commentCard';
import Footer from './Components/footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
              <Route path="/" element={<Home /> }  />
              <Route path="/reviews" element={<Reviews /> }  />
              <Route path="/users" element={<Users />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/reviews/:review_id" element={<SingleReview />} />
              <Route path="/reviews/:review_id/comments" element={<CommentCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
