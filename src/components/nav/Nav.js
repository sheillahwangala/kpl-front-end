import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"
function Nav() {
  return (
    <nav>
      <Link to="/">Teams</Link>
      <Link to="/player"> Player</Link>
      <Link to="/team-stats">Team stats</Link>
      <Link to="/players">Players</Link>
      <Link to="players-stats">Players Stats</Link>
    </nav>
  );
}

export default Nav;
