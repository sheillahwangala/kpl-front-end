import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./player.css"

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
          <td><img src={playerGoal.image} className="imgS"alt="logo" height = "50px" /></td>
          <td>{playerGoal.name}</td>
          <td><h5>{playerGoal.goals} </h5></td>
          </tr>       
  ));
  const playerStatisticsAssits = playerAssists.map((playerAsssist) => (       
        <tr key={playerAsssist.id}>
          <td>{playerAsssist.name}</td>
          <td><img src={playerAsssist.image} className="imgS"alt="logo" height = "50px"/></td>
          <td>{playerAsssist.name}</td>
          <td><h5>{playerAsssist.assists}</h5></td>
          </tr>    
  ));
  return (
    <div className="playerStats">
      <h2>Top Goalscorers</h2>
      <table>
        <tr>
          <th>Name of player</th>
          <th>Image</th>
          <th>Team</th>
          <th>Goals</th>
        </tr>
      {playerStatisticsGoals}
      </table>
      <h2>Top Assisters</h2>
      <table>
      <tr>
          <th>Name of player</th>
          <th>Image</th>
          <th>Team</th>
          <th>Assists</th>
        </tr>
      
      {playerStatisticsAssits}
      </table>
    </div>
  );
}

export default PlayersStats;
