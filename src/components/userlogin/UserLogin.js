import React from "react";
import './UserLogin.css';
import profile from "./../images/avatar.png";
import email from "./../images/email.jpg";
import pass from "./../images/pass.png";

function UserLogin({ userName,setUserName, userPass, setUserPass, addAUser}) {


  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>
          </div>
        </div>
    <div>
      <h1>Sign In</h1>
          <div>
      <input
        type="text"
            placeholder="user name"
            className="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
      />
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input 
            type="password" 
            placeholder="user name" 
            className="name"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
            />
          </div>
         <div className="login-button">
      <button onClick={addAUser}>Sign In</button>
    </div>
          
           <p className="link">
             <a href="#">Forgot password ?</a> | <a href="#">Sign Up</a>
           </p>
          

        </div>
      </div>
      

    </div>
   </div>

  );
}

export default UserLogin;
