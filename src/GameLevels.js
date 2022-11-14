import React, { PureComponent } from "react";
  
  function buildLevel(number) {
    const monsterName = `Monster ${number} `;
  
    return {
      number: number,
      monster: {
        name: monsterName,
        lifeQuantity: number * 7,
        imageUrl: `https://i.pinimg.com/originals/74/3a/78/743a7859cb1c46e67e5ab61bda16661e.jpg`
      }
    };
  }
  
  export const gameLevels = [
    buildLevel(1),
    buildLevel(2),
    buildLevel(3),
    buildLevel(4),
    buildLevel(5)
  ];

  const attacksDamageMap = {
    SWORD: 5,
    AXE: 10,
    MAGIC: 15
  };
  
  class LevelScreen extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        currentLevelNumber: 0,
        monsterLifeQuantity: this.props.LevelData.monster.lifeQuantity
      };
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.LevelData !== prevProps.LevelData) {
        this.setState({
          monsterLifeQuantity: this.props.LevelData.monster.lifeQuantity
        });
      }
    }
  
    attack(type) {
      var damage = attacksDamageMap[type];
      var { monsterLifeQuantity } = this.state;
      this.setState({
        monsterLifeQuantity: monsterLifeQuantity - damage,
      });
    }
  
    render() {
      const { LevelData } = this.props;
      var { monsterLifeQuantity } = this.state;
  
      return (
        <div>
          <h1>Level {LevelData.number}</h1>
  
          <img src={LevelData.monster.imageUrl} alt="monster" className="monster"/>
          <h3>{LevelData.monster.name}</h3>
  
          {monsterLifeQuantity <= 0 ? (
            <div>
              <h3>YOU DID IT!</h3>
              <h3>YOU KILLED THE MONSTER AND SAVED EVERYONE! </h3>
              <button
                onClick={() => this.props.onFinishLevel()}
                className="continueButton"
              >
                CONTINUE
              </button>
            </div>
          ) : (
            <div>
              <h3>LIVES LEFT: {this.state.monsterLifeQuantity}</h3>
              <div>
                <p>ATTACK WITH:</p>
                <button
                  onClick={() => this.attack("SWORD")}
                  className="attackButton"
                >
                  SWORD (5)
                </button>
                <button
                  onClick={() => this.attack("AXE")}
                  className="attackButton"
                >
                  AXE (10)
                </button>
                <button
                  onClick={() => this.attack("MAGIC")}
                  className="attackButton"
                >
                  MAGIC (15)
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default LevelScreen;