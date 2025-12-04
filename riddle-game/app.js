import input from "analiza-sync";
import playersFnc from "./player.js";
import riddlessFnc from "../utils/riddlesUtils.js";
import riddlesList from "../riddles/riddles.js";

function GameFlow() {
  let riddles = riddlesList;
  console.log("Welcome to the Riddle - Game");

  // sort riddles
  const isSorted = input("DO you want to sort the riddles? (y or n): ");
  if (isSorted === "y") {
    riddles = riddlessFnc.sortRiddles(riddles);
  }

  // filter by specific difficulty
  const spesificDifficult = input(
    "Do you want to play a spesific difficult? [hard,easy or medium]:"
  ).toLowerCase();
  if (spesificDifficult) {
    riddles = riddles.filter((riddle) => riddle.difficulty.toLocaleLowerCase() === spesificDifficult);
  }

  // filter by start spesific difficulty
  const difficultyStart = input(
    "DO you want to start from spesific difficulty? [1 (easy),2(medium) or 3(hard)]: "
  );
  if (difficultyStart && Number(difficultyStart) < 4) {
    console.log(difficultyStart);
    riddles = riddles.filter((riddle) => riddle.sort === +difficultyStart);
    console.log(riddles);
  }

  // createing player
  const userName = input("Your name please: ");
  const player = playersFnc.createPlayer(userName);

  // starting display riddles
  let riddleNumber = 1;
  riddles.forEach((riddle) => {
    const duration = riddlessFnc.measureSolveTime(
      riddlessFnc.printRiddle,
      riddle,
      riddleNumber
    );
    playersFnc.addSolveTime(player, duration);
    riddleNumber++;
  });
  playersFnc.showStats(player);
}

GameFlow();
