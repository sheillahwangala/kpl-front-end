import React, { useState } from "react";

function NewTeamForm({ setTeams }) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [coach, setCoach] = useState("");

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dakiak4mc/image/upload",
      formData
    ).then((res) => {
      console.log(res.data.url);
      setLogo(res.data.url);
    });
  };

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
      .then((data) => setTeams(data));
  };

  return (
    <div>
      <label>Logo</label>
      <input
        type="text"
        placeholder="Team Coach"
        value={coach}
        onChange={(e) => setCoach(e.target.value)}
      />
      <input
        type="text"
        placeholder="Team Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="file"
        id="file-selector"
        onChange={(e) => {
          uploadImage(e.target.files);
        }}
      />

      <button type="submit" onClick={createTeam}>
        Create Team
      </button>
    </div>
  );
}

export default NewTeamForm;
