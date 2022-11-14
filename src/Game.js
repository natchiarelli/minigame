import React from "react";
import LevelScreen from "./GameLevels";
import { gameLevels } from "./GameLevels";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentLevelNumber: 0 };
  }

  nextLevel() {
    var { currentLevelNumber } = this.state;

    if (currentLevelNumber >= gameLevels.length) {
      this.setState({ currentLevelNumber: 0 });
    } else {
      this.setState({ currentLevelNumber: currentLevelNumber + 1 });
    }
  }

  render() {
    var { currentLevelNumber } = this.state;
    var gameIsFinished = currentLevelNumber === gameLevels.length;

    if (gameIsFinished) {
      return (
        <div className="App">
          <h1>YOU DID IT!</h1>
          <button onClick={() => this.nextLevel()} className="startButton">
            PLAY AGAIN
          </button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Monsters MiniGame</h1>
            {currentLevelNumber === 0 ? (
              <button onClick={() => this.nextLevel()} className="startButton">
                START
              </button>
            ) : (
              <LevelScreen
                LevelData={gameLevels[currentLevelNumber - 1]}
                onFinishLevel={() => this.nextLevel()}
              />
            )}
          </header>
        </div>
      );
    }
  }
}

export default Game;