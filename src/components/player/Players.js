import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  // const displayPlayers = players.map((player) => (
  //   <div key={player.id}>
  //     <h2>{player.name}</h2>
  //     <h2>{player.image}</h2>
  //     <h2>{player.position}</h2>
  //     <h2>{player.goals}</h2>
  //     <h2>{player.assists}</h2>
  //     <Link to={`/players/${player.id}`}>See Player</Link>
  //   </div>
  // ));
  return (
    // <div>{displayPlayers}</div>;
    <div className="container" >
    {/* {displayTeams} */}
    <hr></hr>
    <table className="table table-striped" >
      <tr className="classHeader" >
        <th>#</th>
        <th>Player Name</th>
        <th>Image</th>
        <th>Position</th>
        <th>Goals</th>
        <th>Assists</th>
      </tr>
      {players.map((player) => {
        return (
          <tr key={player.id} >
            <td>1</td>
            <td className="team-name" >
              <Link className="text-decoration-none text-dark" to={`/players/${player.id}`}>{player.name}</Link>
            </td>
            <td>
              <img src={player.image} alt="img" height="100px" />
            </td>
            <td>{player.position}</td>
            <td>{player.goals}</td>
            <td>{player.assists}</td>
          </tr>
        )
      })}

    </table> <br></br>
  </div>
  )
  
}

export default Players;
