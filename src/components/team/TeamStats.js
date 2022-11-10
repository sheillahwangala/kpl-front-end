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
      className=" border border-dark text-center rounded top-team-div "
    >
      <h2>{index + 1}</h2>
      <Link to={`/teams/${topTeam.id}`}>
        <h2>{topTeam.name}</h2>
      </Link>
      <img src={topTeam.logo} alt="logo" height="100px" />
      <h5>{topTeam.coach} </h5>
      {topTeam.players.map((player) => (
        <div key={player.id}>
          <h5>{player.goals}</h5>
          <p>{player.name}</p>
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      TeamStats
      <div className="d-flex justify-content-evenly">{displayTopTeams}</div>
    </div>
  );
}

export default TeamStats;
