import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./player.css";

function Player({ signedInUser }) {
  const params = useParams();
  console.log(params.id);
  const [players, setPlayers] = useState([]);
  const [goals, setGoals] = useState(0);
  const [assists, setAssists] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  const displayPlayer = players.map(
    (player) =>
      player.id === Number(params.id) && (
        <div className="d-flex justify-content-evenly my-2">
          <div>
            <img src={player.image} alt="Img" height="300px" className="rounded" />
            <h4 className="text-center">{player.name}</h4>
            <h4 className="text-center">Position: {player.position}</h4>
          </div>
          <div className="my-4">
            <h2>Goals: {player.goals}</h2>
            <h2>Assists: {player.assists}</h2>
          </div>
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
        assists: assists,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        setAssists(0);
        setGoals(0);
      });
  };

  const updatePlayerForm = (
    <div className="d-flex flex-column w-25">
      <h2 className="text-center text-decoration-underline">
        Update Player Stats
      </h2>
      <label>Goals</label>
      <input
        className="third"
        type="number"
        name="goals"
        placeholder="goals"
        onChange={(e) => setGoals(e.target.value)}
        value={goals}
      />
      <label>Assists</label>

      <input
        className="third"
        type="number"
        name="assists"
        placeholder="assists"
        onChange={(e) => setAssists(e.target.value)}
        value={assists}
      />

      <button className="my-2 btn btn-success" onClick={updatePlayer}>
        Update
      </button>
    </div>
  );

  return (
    <div>
      <div>{displayPlayer}</div>
      {signedInUser === "admin" && (
        <div className="d-flex justify-content-center">{updatePlayerForm}</div>
      )}
    </div>
  );
}

export default Player;
