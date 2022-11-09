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
    <div key={playerGoal.id} className="container">
      <table>
        <tr>
          <th>Name of player</th>
          <th>Image</th>
          <th>Team</th>
          <th>Goals</th>
        </tr>
        <tr>
          <td>{playerGoal.name}</td>
          <td><img src={playerGoal.image} alt="logo" height="100px" /></td>
          <td>{playerGoal.name}</td>
          <td><h5>{playerGoal.goals} </h5></td>
          </tr>
      </table>
        {/* <h5>{playerGoal.assists} </h5>
        <Link to={`/players/${playerGoal.id}`}>See Player</Link> */}
     
    </div>
  ));
  const playerStatisticsAssits = playerAssists.map((playerAsssist) => (
    <div key={playerAsssist.id} className="container">
      <table>
        <tr>
          <th>Name of player</th>
          <th>Image</th>
          <th>Team</th>
          <th>Goals</th>
        </tr>
        <tr>
          <td>{playerAsssist.name}</td>
          <td><img src={playerAsssist.image} alt="logo" height="100px" /></td>
          <td>{playerAsssist.name}</td>
          <td><h5>{playerAsssist.assists}</h5></td>
          </tr>
      </table>
      {/* <h2></h2>
      <img src={playerAsssist.image} alt="logo" height="100px" />
      goals <h5>{playerAsssist.goals} </h5>
      assists <h5>{playerAsssist.assists} </h5>
      <Link to={`/players/${playerAsssist.id}`}>See Player</Link> */}
    </div>
  ));
  return (
    <div className="playerStats">
      <h2>Top goalscorers</h2>
      {playerStatisticsGoals}
      <h2>Top assisters</h2>
      {playerStatisticsAssits}
    </div>
  );
}

export default PlayersStats;
