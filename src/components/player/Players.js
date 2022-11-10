import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Players() {
  const [players, setPlayers] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:9292/players")
      .then((response) => response.json())
      .then((data) => {
        if (!filterQuery) {
          setPlayers(data);
        } else {
          setPlayers(
            data.filter((player) =>
              player.name.toLowerCase().includes(filterQuery.toLowerCase())
            )
          );
        }
      });
  }, [filterQuery]);

  return (
    <div className="container">
      <small>Search for a player</small>
      <input
        type="text"
        placeholder="Search for a player"
        onChange={(e) => {
          setFilterQuery(e.target.value);
          console.log(filterQuery);
        }}
        className="form-control mb-4"
      />
      <hr></hr>
      {players.length > 0 ? (
        <table className="table table-striped">
          <tr className="classHeader">
            <th>Player Name</th>
            <th>Image</th>
            <th>Position</th>
            <th>Goals</th>
            <th>Assists</th>
          </tr>
          {players.map((player) => (
            <tr key={player.id}>
              <td className="team-name">
                <Link
                  className="text-decoration-none text-dark"
                  to={`/players/${player.id}`}
                >
                  {player.name}
                </Link>
              </td>
              <td>
                <img src={player.image} alt="img" height="100px" />
              </td>
              <td>{player.position}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
            </tr>
          ))}
        </table>
      ) : (
        <h1>No Players with that name are in this league</h1>
      )}
      <br></br>
    </div>
  );
}

export default Players;
