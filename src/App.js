import "./styles.css";
import Game from "./Game";
import SettingsScreen from "./modules/SettingsScreen";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Settings, challengeMap } from "./modules/Settings";
import { gameDefaultLevels } from "./modules/Settings";
import {useEffect} from 'react'

import { loadMonsters } from "./modules/GameService";

function App() {
  const [gameConfig, setGameConfig] = useState({
    challenge: challengeMap[1],
    levels: gameDefaultLevels
  });

  useEffect(() => {
    // function addDefaultConfig(monsters) {
    //   setGameConfig({
    //     difficulty: challengeMap[1],
    //     phases: gameDefaultLevels
    //   });
    // }

    async function load() {
      const data = await loadMonsters();
    }

    load();
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
