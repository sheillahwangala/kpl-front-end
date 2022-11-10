import React from "react";
import './UserLogin.css';
import profile from "./../images/avatar.png";
import email from "./../images/email.jpg";
import pass from "./../images/pass.png";

function UserLogin({ name, setName, addAUser }) {
  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addAUser}>Sign In</button>
    </div>
  );
}

export default UserLogin;
