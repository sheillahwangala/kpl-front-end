import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teams from "./components/team/Teams";
import Player from "./components/player/Player";
import Nav from "./components/nav/Nav";
import TeamStats from "./components/team/TeamStats";
import PlayersStats from "./components/player/PlayersStats";
import EachTeam from "./components/team/EachTeam";
import Players from "./components/player/Players";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Teams />} />
          <Route path="/players/:id" element={<Player />} />
          <Route path="/team-stats" element={<TeamStats />} />
          <Route path="/players-stats" element={<PlayersStats />} />
          <Route path="/teams/:id" element={<EachTeam />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
