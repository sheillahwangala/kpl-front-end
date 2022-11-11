import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teams from "./components/team/Teams";
import Player from "./components/player/Player";
import Nav from "./components/nav/Nav";
import PlayersStats from "./components/player/PlayersStats";
import EachTeam from "./components/team/EachTeam";
import UserLogin from "./components/userlogin/UserLogin";
import Players from "./components/player/Players";
import NewTeamForm from "./components/team/NewTeamForm";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signedInUser, setSignedInUser] = useState("");
  const [name, setName] = useState("");
  const addAUser = () => {
    fetch(" http://127.0.0.1:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    }).then((response) =>
      response.json().then((data) => {
        setSignedInUser(data.name);
      })
    );
    setLoggedIn(true);
  };
  return (
    <div className="App">
      {loggedIn ? (
        <BrowserRouter>
          <Nav signedInUser={signedInUser} />
          <Routes>
            <Route path="/" element={<Teams signedInUser={signedInUser} />} />
            <Route
              path="/players/:id"
              element={<Player signedInUser={signedInUser} />}
            />

            <Route path="/players-stats" element={<PlayersStats />} />
            <Route
              path="/teams/:id"
              element={<EachTeam signedInUser={signedInUser} />}
            />
            <Route path="/players" element={<Players />} />
            <Route path="/new-team" element={<NewTeamForm />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <UserLogin name={name} setName={setName} addAUser={addAUser} />
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
