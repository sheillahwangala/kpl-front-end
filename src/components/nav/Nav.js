import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function Nav({ signedInUser }) {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  
  return (
    <nav className="nav__bar">
      <Link to="/" className="nav__logo text-decoration-none text-light">
        <h3 className="nav__logo">⚽ Kenyan Premeir League ⚽</h3>
      </Link>

      <ul
        className={mobile ? "nav__links__mobile" : "nav__links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/" className="text-decoration-none">
          <li>Teams</li>
        </Link>
        <Link to="/players" className="text-decoration-none">
          <li>Players</li>
        </Link>
        <Link to="players-stats" className="text-decoration-none">
          <li>Players Stats</li>
        </Link>
        {signedInUser === "admin" ? (
          <Link to="/new-team" className="text-decoration-none">
            <li>Add Team</li>
          </Link>
        ) : null}
        {/* refreshes the page */}
        <Link to="/" className="text-decoration-none">
          <li
            onClick={() => {
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            Sign Out
          </li>
        </Link>
      </ul>
      <button className="mobile__menu__icon" onClick={() => setMobile(!mobile)}>
        {mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Nav;
