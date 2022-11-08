import React from 'react'
import { useState, useEffect } from "react";

function PlayersStats() {
  const [playerStat, setplayerStat] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292")
      .then((response) => response.json())
      .then((data) => setplayerStat(data));
  }, []);

  // const playerStatistics = playerStat.map((playerSta) => (
  //   // <div key={topTeam.id} className="container">
  //   //   <h2>{}</h2>
  //   //   <img src={} alt="logo" height="100px" />
  //   //   <h5>{} </h5>
  //   // </div>
  // ));
  return (
    <div>PlayersStats
      {/* {playerStatistics} */}
    </div>
  )
}

export default PlayersStats