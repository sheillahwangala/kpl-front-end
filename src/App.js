import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./components/team/Team";
import Player from "./components/player/Player"
import Nav from "./components/nav/Nav"
import TeamStats from "./components/team/TeamStats";
import PlayersStats from "./components/player/PlayersStats";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/player" element={<Player />} />
          <Route path="/team-stats" element={<TeamStats />} />
          <Route path ="/players-stats" element={<PlayersStats/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
