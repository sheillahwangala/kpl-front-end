import React from 'react'
import { useState, useEffect } from "react";

function PlayersStats() {
  const [playerStat, setplayerStat] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/players")
      .then((response) => response.json())
      .then((data) => setplayerStat(data));
  }, []);

  const playerStatistics = playerStat.map((playerSta) => (
    <div key={playerSta.id} className="container">
      <h2>{playerSta.name}</h2>
      <img src={playerSta.image} alt="logo" height="100px" />
      <h5>{playerSta.goals} </h5>
      <h5>{playerSta.assists} </h5>
    </div>
  ));
  return (
    <div>PlayersStats
      {playerStatistics}
    </div>
  )
}

export default PlayersStats