import React from "react";

function Teams() {
  fetch("http://127.0.0.1:9292/teams")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    }, []);
  return <div>Team</div>;
}

export default Teams;
