import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EachTeam() {
  const params = useParams();
  console.log(params.id);
  const [teams, setTeams] = useState([]);
  fetch("http://127.0.0.1:9292/teams")
    .then((response) => response.json())
    .then((data) => {
      setTeams(data);
    }, []);

  const showEachTeam = teams.map(
    (team) =>
      team.id === parseInt(params.id) && (
        <div>
          <h1>{team.name}</h1>
          {team.players.map((player) => (
            <div>
              <h2>{player.name}</h2>
              <h3>{player.position}</h3>
            </div>
          ))}
        </div>
      )
  );

  return (
    <div>
      EachTeam
      {showEachTeam}
    </div>
  );
}

export default EachTeam;
