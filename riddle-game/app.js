import input from "analiza-sync";
import playersFnc from "./player.js";
import riddlessFnc from "../utils/riddlesUtils.js";
import riddles from "../riddles/riddles.js";

function GameFlow() {
  console.log("Welcome to the Riddle - Game");
  const userName = input("Your name please: ");
  const player = playersFnc.createPlayer(userName);
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
