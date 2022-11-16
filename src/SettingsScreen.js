import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  buildGame,
  Settings,
  challengeMap,
  getIndexOfChallengeByName
} from "./Settings";

function SettingsScreen() {
  const [gameConfig, setGameConfig] = useContext(Settings);
  const [levelsQuantity, setLevelsQuantity] = useState(
    gameConfig.levels.length
  );
  const [challenge, setChallenge] = useState(gameConfig.challenge);

  useEffect(() => {
    function updateGame() {
      const game = buildGame(challenge, levelsQuantity);
      setGameConfig(game);
      console.log("game", game);
    }

    updateGame();
  }, [challenge, levelsQuantity, setGameConfig]);

  function increaseChallenge() {
    const indexOfChallenge = getIndexOfChallengeByName(challenge.name);

    if (indexOfChallenge >= challengeMap.length - 1) {
      alert("You have reached the max amount of levels");
    } else {
      let newChallengeIndex = indexOfChallenge + 1;
      setChallenge(challengeMap[newChallengeIndex]);
    }
  }

  function decreaseChallenge() {
    const indexOfChallenge = getIndexOfChallengeByName(challenge.name);

    if (indexOfChallenge === 0) {
      alert("You have reached the lowest challenge in the game");
    } else {
      let newChallengeIndex = indexOfChallenge - 1;
      setChallenge(challengeMap[newChallengeIndex]);
    }
  }

  function decreaseLevelsQuantity() {
    if (levelsQuantity > 1) {
      setLevelsQuantity(levelsQuantity - 1);
    } else {
      alert("You have reached the lowest level in the game");
    }
  }
  
  return (
    <div className="App">
      <h1>Monster APP</h1>
      <h1>SETTINGS</h1>
      <div>
        <h3>Level quantity</h3>
        <h3>{levelsQuantity}</h3>
        <button
          onClick={() => decreaseLevelsQuantity()}
          className="attackButton"
        >
          -
        </button>
        <button
          onClick={() => setLevelsQuantity(levelsQuantity + 1)}
          className="attackButton"
        >
          +
        </button>
      </div>

      <div>
        <h3>Game level</h3>
        <h3>{challenge.name}</h3>
        <button onClick={() => decreaseChallenge()} className="attackButton">
          -
        </button>
        <button onClick={() => increaseChallenge()} className="attackButton">
          +
        </button>
      </div>
      <Link style={{ color: "black" }} to="/">
        VOLTAR
      </Link>
    </div>
  );
}

export default SettingsScreen;
