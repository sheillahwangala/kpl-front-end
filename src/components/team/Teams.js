import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./team.css";

function Teams({ signedInUser }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div className="home-page">
      <div className="container">
        {signedInUser ? <h1>Welcome {signedInUser}</h1> : null}
        <hr></hr>
        <table className="table table-striped">
          <tr className="classHeader ">
            <th>Position</th>
            <th>Team Name</th>
            <th>Team Logo</th>
            <th className="w-100">Games Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
          {teams.map((team, index) => {
            return (
              <tr key={team.id}>
                <td>{index + 1}</td>
                <td className="team-name w-100">
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/teams/${team.id}`}
                  >
                    {team.name}
                  </Link>
                </td>
                <td>
                  <img src={team.logo} alt="logo" height="100px" />
                </td>
                <td>{team.matches_played}</td>
                <td>{team.matches_won}</td>
                <td>{team.matches_drawn}</td>
                <td>{team.matches_lost}</td>
                <td>{team.points}</td>
              </tr>
            );
          })}
        </table>{" "}
      </div>
    </div>
  );
}

export default Teams;
