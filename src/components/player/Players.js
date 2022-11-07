import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Players() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:9292/players")
    .then((response) => response.json())
    .then((data) => setPlayers(data));
  }, []);
  
  const displayPlayers = players.map((player) => (
    <div key={player.id} >
      <h2>{player.name}</h2>
      <Link to={`/players/${player.id}`} >See Players</Link>

    </div>
  ))
  return (
    <div>
        {displayPlayers}
    </div>
  );
}

export default Players