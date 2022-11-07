import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './team.css'

function Teams() {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:9293/teams")
    .then((response) => response.json())
    .then((data) => setTeams(data));
  }, []);
  
  const displayTeams = teams.map((team) => (
    <div key={team.id} className="container" >
      <h2>{team.name}</h2>
      <img src={team.logo} alt="logo" height="100px" />
      <h5>{team.coach} </h5>
      <Link to={`/teams/${team.id}`} >See Team</Link>

    </div>
  ))

  return (
    <div>
        {displayTeams}
    </div>
  );
}

export default Teams;
