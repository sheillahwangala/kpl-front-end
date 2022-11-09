import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewTeamForm from "./NewTeamForm";
import "./team.css";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data));
  }, []);

  // const displayTeams = teams.map((team) => (
  //   <div key={team.id} className="container">
  //     <h2>{team.name}</h2>
  //     <img src={team.logo} alt="logo" height="100px" />
  //     <h5>{team.coach} </h5>
  //     <Link to={`/teams/${team.id}`}>See Team</Link>
  //   </div>
  // ));

  return (
    <div className="container" > 
      {/* {displayTeams} */}     
      <hr></hr>
      <table className="table table-striped" >
        <tr className="classHeader" >
          <th>Team Name</th>
          <th>Team Logo</th>
          <th>Games Played</th>
          <th>Won</th>
          <th>Drawn</th>
          <th>Lost</th>
          <th>Points</th>
        </tr>
        {teams.map((team, key) => {
          return (
            <tr key={team.id} >
              <td className="teamName" >
              <Link to={`/teams/${team.id}`}>{team.name}</Link>
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
          )
        })}

      </table> <br></br>

      <NewTeamForm setTeams={setTeams} /> 
        
    </div>


  );
}

export default Teams;
