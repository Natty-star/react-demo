import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/follow">Follow</Link>
          </li>
          <li>
            <Link to="/posts"> Posts</Link>
          </li>
          <li>
            <Link to="/create-post"> Add Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
