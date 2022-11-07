import React, { useState } from "react";

function NewTeamForm() {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [coach, setCoach] = useState("");

  return (
    <div>
      <input type="text" placeholder="Team Name"  value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Team Logo" value={logo} onChange={(e) => setLogo(e.target.value)} />
        <input type="text" placeholder="Team Coach" value={coach} onChange={(e) => setCoach(e.target.value)} />
        <button type="submit">Create Team</button>
    
    </div>
  );
}

export default NewTeamForm;
