import React, { useState } from "react";

function NewTeamForm({ setTeams }) {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [coach, setCoach] = useState("");

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
    }).then((response) => response.json());
  };

  return (
    // <div className="container">
    //   <div className="d-flex flex-column justify-content-center">
    //     <label>Logo</label>
    //     <input
    //       type="file"
    //       id="file-selector"
    //       onChange={(e) => {
    //         uploadImage(e.target.files);
    //       }}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Team Coach"
    //       value={coach}
    //       onChange={(e) => setCoach(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Team Name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />

    //     <button type="submit" onClick={createTeam}>
    //       Create Team
    //     </button>
    //   </div>
    // </div>
    <form className="d-flex flex-column justify-content-center w-50 ">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewTeamForm;
