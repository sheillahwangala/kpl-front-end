import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/player" element={<Player />} />
          <Route path="/team-stats" element={<TeamStats />} />
          </Routes>
        </Template>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
