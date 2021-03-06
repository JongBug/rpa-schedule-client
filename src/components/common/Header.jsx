import React from "react";
import { Link } from "react-router-dom";
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </li>
        <li>
          <Link to="/bot">Bots</Link>
        </li>
        <li>
          <Link to="/schedule">Bot Schedule</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
