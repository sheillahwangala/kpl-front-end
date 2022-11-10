import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./teamstats.css";
function TeamStats() {
  const [topTeams, setTopTeams] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/top_scoringteams")
      .then((response) => response.json())
      .then((data) => {
        setTopTeams(data);
      });
  }, []);

  const displayTopTeams = topTeams.map((topTeam, index) => (
    <div
      key={topTeam.id}
      className=" border border-dark text-center p-2 d-flex flex-column rounded top-team-div mx-5  "
    >
      <h1>{index + 1}</h1>
      <div>
        <Link
          className="w-100 text-decoration-none text-dark"
          to={`/teams/${topTeam.id}`}
        >
          <h2>{topTeam.name}</h2>
        </Link>
        <img src={topTeam.logo} alt="logo" height="200px" />
        <span className="text-center">Coach: {topTeam.coach}</span>
        <div>
          <span className="text-center">Points: {topTeam.points}</span>
        </div>

        {topTeam.players.map((player) => (
          <div key={player.id}>
            <h5>{player.goals}</h5>
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div>
      <h2 className="text-decoration-underline my-2">Top Scoring Teams</h2>
      <div className="d-flex flex-wrap ">{displayTopTeams}</div>
    </div>
  );
}

export default TeamStats;
