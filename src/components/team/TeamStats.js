import React from 'react'

function TeamStats() {
  const [topTeams, setTopTeams] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/top_scoringteams")
      .then((response) => response.json())
      .then((data) => setTopTeams(data));
  }, []);
  return (
    <div>TeamStats</div>
  )
}

export default TeamStats