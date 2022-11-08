import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./player.css";

function Player() {
  const params = useParams();
  console.log(params.id);
  const [players, setPlayers] = useState([]);
  const [goals, setGoals] = useState("")
  const [assists, setAssists] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:9292/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  const displayPlayer = players.map(
    (player) =>
      player.id === Number(params.id) && (
        <div>
          <h4> Name: {player.name}</h4>
          <h5>Position: {player.position}</h5>
          <p>Goals: {player.goals}</p>
          <p>Assists: {player.assists}</p>        
        </div>
      )
  );

  const updatePlayer = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:9292/players/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        goals: goals,
        assists: assists
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        setGoals("");
        setAssists("");
      })
  };

  const updatePlayerForm = (
    <div>
      <input
        type="number"
        name="goals"
        placeholder="goals"
        onChange={(e) => setGoals(e.target.value)}
        value={goals}
      />
      <input
        type="number"
        name="assists"
        placeholder="assists"
        onChange={(e) => setAssists(e.target.value)}
        value={assists}
      />
      <button type="button" onClick={updatePlayer}>
        Update Player
      </button>
    </div>
  );


  return (
      <div>
        <div>{displayPlayer}</div>
        {updatePlayerForm}     
      </div>
  )
}

export default Player;
