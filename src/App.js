import "./styles.css";
import Game from "./Game";
import SettingsScreen from "./SettingsScreen";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Settings, challengeMap } from "./Settings";
import { gameDefaultLevels } from "./Settings";

function App() {
  const [gameConfig, setGameConfig] = useState({
    challenge: challengeMap[1],
    levels: gameDefaultLevels
  });

  return (
    <div className="App">
      <Settings.Provider value={[gameConfig, setGameConfig]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="settings" element={<SettingsScreen />} />
          </Routes>
        </BrowserRouter>
      </Settings.Provider>
    </div>
  );
}


export default App;
