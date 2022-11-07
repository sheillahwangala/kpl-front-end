import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./components/team/Team";
import Player from "./components/player/Player"
import Nav from "./components/nav/Nav"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/player" element={<Player />} />
          {/* <Route path="/team-stats" element={<TeamStats />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
