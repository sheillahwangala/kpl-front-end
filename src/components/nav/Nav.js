import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./nav.css"
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

function Nav() {  
  const [mobile, setMobile] = useState(false)
  return (
    <nav className="nav__bar">
      {/* <div className="container"> */}
        <h3 className="nav__logo">⚽ Kenyan Premeir League ⚽</h3>
        <ul className={mobile ? "nav__links__mobile" : "nav__links"} onClick={()=>setMobile(false)}>
          <Link to="/"><li>Teams</li></Link>
          <Link to="/team-stats"><li>Team stats</li></Link>
          <Link to="/players"><li>Players</li></Link>
          <Link to="players-stats"><li>Players Stats</li></Link>
        </ul>
        <button className="mobile__menu__icon" onClick={()=> setMobile(!mobile)}> 
          {mobile? <ImCross/> :<FaBars/>}
        </button>
      {/* </div> */}
    </nav>
  );
}

export default Nav;
