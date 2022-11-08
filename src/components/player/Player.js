import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./player.css";
function Player() {
  const params = useParams();
  console.log(params.id);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  const displayPlayer = players.map(
    (player) =>
      player.id === Number(params.id) && (
        <div>
          <p>{player.name}</p>
          Goals: <p>{player.goals}</p>
          Assists: <p>{player.assists}</p>
          Position:<h3>{player.position}</h3>
        </div>
      )
  );

  return <div>{displayPlayer}</div>;
}

export default Player;
