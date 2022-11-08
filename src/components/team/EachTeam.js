import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddPlayer from '../player/AddPlayer'

function EachTeam() {
  const params = useParams();
  const [teamId, setTeamId] = useState(Number(params.id))
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/teams")
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
      }, []);
  });

  const showEachTeam = teams.map(
    (team) =>
      team.id === parseInt(params.id) && (
        <div>
          <h1>{team.name}</h1>
          <img src={team.logo} alt="logo" height="100px" />
          {team.players.map((player) => (
            <div>
              <img src={player.image} />
              <h2>{player.name}</h2>
             <button type="button" onClick = {(e)=>{
              e.preventDefault()
              fetch(`http://127.0.0.1:9292/players/${player.id}`, {
              method: 'DELETE'
                })
                  .then(res => res.json())
                  .then(data => {
                    // Do some stuff...
              
                  })
                  .catch(err => console.log(err));
              }}>
                Delete
                </button>
              <Link to={`/players/${player.id}`}>See Player</Link>
            </div>
          ))}
        </div>
      )
  );

  return (
    <div>
      EachTeam
      {showEachTeam}
      <AddPlayer teamId={teamId}/>
    </div>
  );
}

export default EachTeam;
