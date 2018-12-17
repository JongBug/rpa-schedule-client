import React from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
import { Container, Row } from "react-materialize";
// The Header creates links that can be used to navigate
// between routes.
const SideNavConfig = () => (
  <div>
    <Row>
      <ul class="sidenav" class="col s2">
        <li>
          <Link to="/bot">Bots</Link>
        </li>
        <li>
          <Link to="/schedule">Bot Schedule</Link>
        </li>
      </ul>
      <Main />
    </Row>
    <Container />
  </div>
);

export default SideNavConfig;
