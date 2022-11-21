import { createContext } from "react";
// import { gameLevel } from "./GameLevels";

export const challengeMap = [
  {
    multiplierForMonsterLife: 1,
    name: "EASY"
  },
  {
    multiplierForMonsterLife: 2,
    name: "MEDIUM"
  },
  {
    multiplierForMonsterLife: 3,
    name: "HARD"
  }
];

export const Settings = createContext("settings");

export const getIndexOfChallengeByName = (challengeName) => {
  return challengeMap.findIndex((object) => {
    return object.name === challengeName;
  });
};

// function getRandomColor() {
//   let maxVal = 0xffffff;
//   let randomNumber = Math.random() * maxVal;
//   randomNumber = Math.floor(randomNumber);
//   let randColor = randomNumber.toString(16);

//   return randColor;
// }

const buildLevels = (identifier, challenge) => {
  const monsterName = `Monster ${identifier} `;

  return {
    number: identifier,
    monster: {
      name: monsterName,
      lifeQuantity: identifier * 7 * challenge.multiplierForMonsterLife,
      imageUrl: `https://i.pinimg.com/originals/74/3a/78/743a7859cb1c46e67e5ab61bda16661e.jpg`
    }
  };
};

const initialChallenge = challengeMap[1];

export const gameDefaultLevels = [
  buildLevels(1, initialChallenge),
  buildLevels(2, initialChallenge),
  buildLevels(3, initialChallenge),
  buildLevels(4, initialChallenge),
  buildLevels(5, initialChallenge)
];

export const buildGame = (challenge, levelsQuantity) => {
  let gameLevels = [];
  for (let index = 1; index <= levelsQuantity + 1; index++) {
    const level = buildLevels(index, challenge);
    gameLevels.push(level);
  }

  return {
    challenge,
    levels: gameLevels
  };
};
