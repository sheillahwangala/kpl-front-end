import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTeamForm({ setTeams }) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [coach, setCoach] = useState("");
  const navigate = useNavigate();

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setLogo(data.secure_url);
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
    }).then((response) => response.json())
    setTimeout(()=>{
      navigate("/");
    }, 1000)
  
  };

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center">
        <label>Choose a team logo </label>
        <input
          type="file"
          id="file-selector"
          onChange={(e) => {
            uploadImage(e.target.files);
          }}
        />
        <input
          type="text"
          placeholder="Team Coach"
          className="mt-2 form-control"
          value={coach}
          onChange={(e) => setCoach(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team Name"
          value={name}
          className="mt-2 form-control"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          type="submit"
          onClick={createTeam}
          className="btn btn-primary my-4"
        >
          Create Team
        </button>
      </div>
    </div>
  );
}

export default NewTeamForm;
