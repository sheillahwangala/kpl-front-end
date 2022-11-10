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
    <div key={topTeam.id} className="top-player-card" >
      <h1>{index + 1}</h1>

      <div className="top-team-logo" >
         
          <Link to={`/teams/${topTeam.id}`}>
            <h3>{topTeam.name}</h3>
          </Link>
        <img src={topTeam.logo} alt="logo" height="250px" />
      </div>

      <div className="top-attr" >
        <h6 >Coach: {topTeam.coach}</h6>       
        <h6>Points: {topTeam.points}</h6>
  

        {topTeam.players.map((player) => (
          <div key={player.id}>
            <h6>Goals: {player.goals}</h6>
            <h6>Scorer: {player.name}</h6>
          </div>
        ))}
      </div>
    </div>
  
  ));

  return (
    <div>
      <h2 className="top-title">Top Teams Statistics</h2><hr></hr>
      <div className="all-cards" >{displayTopTeams}</div>
    </div>
  );
}

export default TeamStats;
