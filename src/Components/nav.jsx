import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/reviews">Reviews</Link>
      <span> | </span>
      <Link to="/categories">Categories</Link>
      <span> | </span>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Nav;