import React from "react";
import "./UserLogin.css";
import profile from "./../images/avatar.png";


function UserLogin({ name, setName, addAUser }) {
  return (
    <div className="main">

    <div className="sub-main">
      <div>
        <div className="header">
          <h2>Welcome to <span>Kenya Premier League</span></h2>
        </div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>
          </div>
        </div>

      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Sign In</h1>
            <small className="small">
              Kindly add your name so we can personalize your experience
            </small>
            <div>
              <input
                type="text"
                placeholder="user name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="login-button">
              <button onClick={addAUser}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
