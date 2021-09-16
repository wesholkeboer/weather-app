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
              <h2>Current Local Weather</h2>
            </Link>
          </li>
          <li>
            <Link to="/fivedaytemp">
              <h2>Five Day Local Forecast</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
