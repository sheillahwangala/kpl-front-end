import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PlayersStats() {
  const [playerGoals, setplayerGoals] = useState([]);
  const [playerAssists, setplayerAssists] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/top_goalscorers")
      .then((response) => response.json())
      .then((data) => setplayerGoals(data));
    fetch("http://127.0.0.1:9292/top_assisters")
      .then((response) => response.json())
      .then((data) => setplayerAssists(data));
  }, []);

  const playerStatisticsGoals = playerGoals.map((playerGoal) => (
    <div key={playerGoal.id} className="container">
      <h2>{playerGoal.name}</h2>
      <img src={playerGoal.image} alt="logo" height="100px" />
      <h5>{playerGoal.goals} </h5>
      <h5>{playerGoal.assists} </h5>
      <Link to={`/players/${playerGoal.id}`}>See Player</Link>
    </div>
  ));
  const playerStatisticsAssits = playerAssists.map((playerAsssist) => (
    <div key={playerAsssist.id} className="container">
      <h2>{playerAsssist.name}</h2>
      <img src={playerAsssist.image} alt="logo" height="100px" />
      goals <h5>{playerAsssist.goals} </h5>
      assists <h5>{playerAsssist.assists} </h5>
      <Link to={`/players/${playerAsssist.id}`}>See Player</Link>
    </div>
  ));
  return (
    <div>
      Top goalscorers
      {playerStatisticsGoals}
      top assisters
      {playerStatisticsAssits}
    </div>
  );
}

export default PlayersStats;
