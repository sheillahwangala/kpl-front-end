import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddPlayer from '../player/AddPlayer'

function EachTeam() {
  const params = useParams();
  const [teamId, setTeamId] = useState(Number(params.id))
  const [teams, setTeams] = useState([]);
  const [matches_won, setMatches_won] = useState("")
  const [matches_lost, setMatches_lost] = useState("")
  const [matches_drawn, setMatches_drawn] = useState("")
    

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
                </button><br></br>
              <Link to={`/players/${player.id}`}>See Player</Link>
            </div>
          ))}
        </div>
      )
  ); 

  const updateTeamData = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:9292/players/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matches_won: matches_won,
        matches_lost: matches_lost,
        matches_drawn: matches_drawn
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
        matches_won("")
        matches_lost("")
        matches_drawn("")

      })
  };

  const updateTeamForm = (
    <div>
      <input
        type="number"
        name="matches_won"
        placeholder="matches_won"
        onChange={(e) => setMatches_won(e.target.value)}
        value={matches_won}
      />
      <input
        type="number"
        name="matches_lost"
        placeholder="matches_lost"
        onChange={(e) => setMatches_lost(e.target.value)}
        value={matches_lost}
      />
       <input
        type="number"
        name="matches_drawn"
        placeholder="matches_drawn"
        onChange={(e) => setMatches_drawn(e.target.value)}
        value={matches_drawn}
      />
      <button type="button" onClick={updateTeamData}>
        Update Team Scores
      </button>
    </div>
  );


  return (
    <div>
      EachTeam
      {showEachTeam}
      <br></br>
      {updateTeamForm} 
      <ul>
        <li>Matches won: {matches_won}</li>
        <li>Matches won: {matches_lost}</li>
        <li>Matches won: {matches_drawn}</li>
      </ul>
      <br></br>
      <AddPlayer teamId={teamId}/>
    </div>
  );
}

export default EachTeam;
