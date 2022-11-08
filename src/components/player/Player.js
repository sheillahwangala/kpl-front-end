import React from 'react'
import {useState, useEffect} from "react"
import "./player.css"
function Player() {
  const [player, setPlayer] = useState([])
  useEffect(()=> {
    fetch("http://127.0.0.1:9292/players")
    .then((resp)=> resp.json())
    .then((data)=>setPlayer(data));
  },[]);
  const displayPlayer = player.map((play)=>(
    <tr key={play.id}>
    <td>{play.id}</td>
    <td>{play.name}</td>
    <td><img src={play.image} alt="logo"/></td>
    <td>{play.position}</td>
    <td>{play.goals}</td>
    <td>{play.assists}</td>
    <td>{play.team_id}</td>
    <td>
      <tr>
        <td>{play.team.id}</td>
        <td>{play.team.name}</td>
        <td><img src={play.team.Logo} alt="logo"/></td>
        <th>{play.team.matches_played}</th>
        <th>{play.team.matches_won}</th>
        <th>{play.team.matches_lost}</th>
        <th>{play.team.matches_drawn}</th>
        <th>{play.team.points}</th>
        <th>{play.team.coach}</th>
        <th>{play.team.created_at}</th>
        <th>{play.team.updated_at}</th>
      </tr>
    </td>
  </tr>       
  ))
  return (
    <div className='table_for_player'>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Image</th>
          <th>Position</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Team_id</th>
          <th className='double_row'>
            <tr>
            <th>Team</th>
            </tr>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Logo</th>
              <th>Matches_played</th>
              <th>Matches_won</th>
              <th>Matches_lost</th>
              <th>Matches_drawn</th>
              <th>Points</th>
              <th>Coach</th>
              <th>Created_at</th>
              <th>Updated_at</th>
            </tr>
          </th>
        </tr>
      {displayPlayer} 
    </table>
    </div>
  )
}

export default Player