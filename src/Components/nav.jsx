import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
    <nav>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/reviews">Reviews</Link>
      <span> | </span>
      <Link to="/categories">Categories</Link>
      <span> | </span>
      <Link to="/users">Users</Link>
    </nav>
    </div>
  );
};

export default Nav;