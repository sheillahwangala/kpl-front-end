import React from "react";
import { useState, useEffect } from "react";
import "./player.css";

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
    <tr key={playerGoal.id}>
      <td>{playerGoal.name}</td>
      <td>
        <img src={playerGoal.image} className="rounded-circle " alt="logo" height="50px" />
      </td>
      <td>{playerGoal.team_id}</td>
      <td>
        <h5>{playerGoal.goals} </h5>
      </td>
    </tr>
  ));
  const playerStatisticsAssits = playerAssists.map((playerAsssist) => (
    <tr key={playerAsssist.id}>
      <td>{playerAsssist.name}</td>
      <td>
        <img src={playerAsssist.image} alt="logo" height="50px" />
      </td>
      <td>{playerAsssist.team_id}</td>
      <td>
        <h5>{playerAsssist.assists}</h5>
      </td>
    </tr>
  ));
  return (
    <div className="back d-flex flex-row justify-content-evenly">
      <div className="playerStats">
        <h2 className="text-decoration-underline my-2">Top Goalscorers</h2>
        <table className="player-stats-table">
          <tr>
            <th>Name of player</th>
            <th>Image</th>
            <th>Team</th>
            <th>Goals</th>
          </tr>
          {playerStatisticsGoals}
        </table>
      </div>
      <div className="playerStats">
        <h2 className="text-decoration-underline my-2">Top Assisters</h2>
        <table className="player-stats-table">
          <tr>
            <th>Name of player</th>
            <th>Image</th>
            <th>Team</th>
            <th>Assists</th>
          </tr>
          {playerStatisticsAssits}
        </table>
      </div>
    </div>
  );
}

export default PlayersStats;
