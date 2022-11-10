import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddPlayer from "../player/AddPlayer";
import "./each-team.css";

function EachTeam({ signedInUser }) {
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
      });
  });

  const showEachTeam = teams.map(
    (team) =>
      team.id === parseInt(params.id) && (
        <div>
          <div className="d-flex justify-content-evenly">
            <div className="d-flex flex-column justify-content-center">
              <h1>{team.name}</h1>
              <img
                className="rounded-circle"
                src={team.logo}
                alt="logo"
                height="200px"
              />
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
          {team.players.length > 0 && (
            <h2 className="text-center text-decoration-underline">
              Players for {team.name}
            </h2>
          )}

          {team.players.length > 0 ? (
            <div className="d-flex justify-content-evenly flex-wrap">
              {team.players.map((player) => (
                <div className="d-flex flex-column justify-content-center border border-2  rounded-3 m-2 p-2 each-player-div">
                  <img src={player.image} alt="Img" height="200px" />
                  <Link
                    to={`/players/${player.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <h2 className="text-center">{player.name}</h2>
                  </Link>

                  {signedInUser === "admin" && (
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        fetch(`http://127.0.0.1:9292/players/${player.id}`, {
                          method: "DELETE",
                        });
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-center text-decoration-underline">
                No players for {team.name}
              </h2>
            </div>
          )}
        </div>
      )
  );

  const updateTeamData = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:9292/teams/${teamId}`, {
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
    });
  };

  const updateTeamForm = (
    <div className="d-flex flex-column mx-2 justify-content-center">
      <h2 className="text-center">Update Team Data</h2>
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

      <button
        type="button"
        onClick={updateTeamData}
        className="btn btn-primary my-1"
      >
        Update Team Scores
      </button>
    </div>
  );

  return (
    <div>
      {showEachTeam}

      {signedInUser === "admin" && (
        <div className="d-flex  justify-content-evenly">
          {updateTeamForm}
          <AddPlayer teamId={teamId} />
        </div>
      )}
    </div>
  );
}

export default EachTeam;
