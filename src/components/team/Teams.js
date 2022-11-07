import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Teams() {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:9292/teams")
    .then((response) => response.json())
    .then((data) => setTeams(data));
  }, []);
  
  const displayTeams = teams.map((team) => (
    <div key={team.id} >
      <h2>{team.name}</h2>
      <Link to={`/teams/${team.id}`} >See Team</Link>

    </div>
  ))
  return (
    <div>
        {displayTeams}
    </div>
  );
}

export default Teams
