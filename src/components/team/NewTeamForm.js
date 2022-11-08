import React, { useState } from "react";

function NewTeamForm() {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [coach, setCoach] = useState("");

  const createTeam = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:9292/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        logo: logo,
        coach: coach,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Team Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Team Logo"
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Team Coach"
        value={coach}
        onChange={(e) => setCoach(e.target.value)}
      />
      <button type="submit" onClick={createTeam}>
        Create Team
      </button>
    </div>
  );
}

export default NewTeamForm;
