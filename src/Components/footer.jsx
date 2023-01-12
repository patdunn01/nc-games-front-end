import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
    <nav>
      <Link to="/reviews">Reviews</Link>
      <span> | </span>
      <Link to="/categories">Categories</Link>
      <span> | </span>
      <Link to="/users">Users</Link>
    </nav>
    </div>
  );
};

export default Footer;