import React from "react";
import LevelScreen from "./GameLevels";
import { gameDefaultLevels } from "./Settings";
import { Link } from "react-router-dom";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentLevelNumber: 0 };
  }

  nextLevel() {
    var { currentLevelNumber } = this.state;

    if (currentLevelNumber >= gameDefaultLevels.length) {
      this.setState({ currentLevelNumber: 0 });
    } else {
      this.setState({ currentLevelNumber: currentLevelNumber + 1 });
    }
  }

  render() {
    var { currentLevelNumber } = this.state;
    var gameIsFinished = currentLevelNumber === gameDefaultLevels.length;

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
              <><button onClick={() => this.nextLevel()} className="startButton">
                          START
                      </button><Link style={{ color: "black" }} to="settings">
                CONFIGURAÇÕES
              </Link></>
            ) : (
              <LevelScreen
                LevelData={gameDefaultLevels[currentLevelNumber - 1]}
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