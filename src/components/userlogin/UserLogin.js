import React from "react";

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
