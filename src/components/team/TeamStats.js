import React from 'react'

function TeamStats() {
  const [topTeams, setTopTeams] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/top_scoringteams")
      .then((response) => response.json())
      .then((data) => setTopTeams(data));
  }, []);

  const displayTopTeams = topTeams.map((topTeam) => (
    <div key={topTeam.id} className="container">
      <h2>{topTeam.name}</h2>
      <img src={topTeam.logo} alt="logo" height="100px" />
      <h5>{topTeam.coach} </h5>
    </div>
  ));
  return (
    <div>TeamStats</div>
  )
}

export default TeamStats