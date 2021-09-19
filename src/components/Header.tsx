import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>weather. local.</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <h2>current local</h2>
            </Link>
          </li>
          <li>
            <Link to="/fivedaytemp">
              <h2>five day local forecast</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
