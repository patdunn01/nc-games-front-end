import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/header';
import Nav from './Components/nav';
import Reviews from './Components/reviews';
import Users from './Components/users';
import Categories from './Components/categories';

function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/users" element={<Users />} />
              <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
