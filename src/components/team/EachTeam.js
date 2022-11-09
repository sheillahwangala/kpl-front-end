import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddPlayer from "../player/AddPlayer";
import "./each-team.css";

function EachTeam() {
  const params = useParams();
  const [teamId, setTeamId] = useState(Number(params.id));
  const [teams, setTeams] = useState([]);
  const [matches_played, setMatches_played] = useState(0);
  const [matches_won, setMatches_won] = useState(0);
  const [matches_lost, setMatches_lost] = useState(0);
  const [matches_drawn, setMatches_drawn] = useState(0);
  const [points, setPoints] = useState(0);

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
          <div>
            <div>
              <h1>{team.name}</h1>
              <img src={team.logo} alt="logo" height="100px" />
            </div>
            <div>
              <h3>Coach: {team.coach}</h3>
              <p>Points: {team.points}</p>
              <p>Matches played: {team.matches_played}</p>
              <p>Matches won: {team.matches_won}</p>
              <p>Matches lost: {team.matches_lost}</p>
              <p>Matches drawn: {team.matches_drawn}</p>
            </div>
          </div>

          {team.players.map((player) => (
            <div>
              <img src={player.image} alt="Img" />
              <h2>{player.name}</h2>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  fetch(`http://127.0.0.1:9292/players/${player.id}`, {
                    method: "DELETE",
                  });
                }}
              >
                Delete
              </button>
              <br></br>
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
        matches_played: matches_played,
        matches_won: matches_won,
        matches_lost: matches_lost,
        matches_drawn: matches_drawn,
        points: points,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
        matches_played("");
        matches_won("");
        matches_lost("");
        matches_drawn("");
        points("");
      });
  };

  const updateTeamForm = (
    <div className="scores-form">
      <label for="matches_played">Matches played:</label>
      <input
        className="score-input"
        type="number"
        name="matches_played"
        placeholder="matches_played"
        onChange={(e) => setMatches_played(e.target.value)}
        value={matches_played}
      />
      <label for="matches_won">Matches won:</label>
      <input
        className="score-input"
        type="number"
        name="matches_won"
        placeholder="matches_won"
        onChange={(e) => setMatches_won(e.target.value)}
        value={matches_won}
      />
      <label for="matches_lost">Matches lost:</label>
      <input
        className="score-input"
        type="number"
        name="matches_lost"
        placeholder="matches_lost"
        onChange={(e) => setMatches_lost(e.target.value)}
        value={matches_lost}
      />
      <label for="matches_dawn">Matches drawn:</label>
      <input
        className="score-input"
        type="number"
        name="matches_drawn"
        placeholder="matches_drawn"
        onChange={(e) => setMatches_drawn(e.target.value)}
        value={matches_drawn}
      />
      <label for="points">Points:</label>
      <input
        className="score-input"
        type="number"
        name="points"
        placeholder="points"
        onChange={(e) => setPoints(e.target.value)}
        value={points}
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
        <li>Matches played: {matches_played}</li>
        <li>Matches won: {matches_won}</li>
        <li>Matches won: {matches_lost}</li>
        <li>Matches won: {matches_drawn}</li>
        <li>Points: {points}</li>
      </ul>
      <br></br>
      <AddPlayer teamId={teamId} />
    </div>
  );
}

export default EachTeam;
