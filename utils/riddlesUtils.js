import riddles from "../riddles/riddles.js";

import input from "analiza-sync";

export default {
  printRiddle,
  askRiddle,
  measureSolveTime,
};

function printRiddle(riddleObj, riddleNumber) {
  console.log(`Riddle ${riddleNumber}`);
  console.log(riddleObj.name);
  console.log(riddleObj.taskDescription);

  if (Object.hasOwn(riddleObj, "choices")) {
    let choise = 1;
    riddleObj.choices.forEach((element) => {
      console.log(`choice ${choise} : ${element}`);
      choise++;
    });
  }
  askRiddle(riddleObj);
}

function askRiddle(riddleObj) {
  let isCorrect = false;
  while (!isCorrect) {
    const answer = input("Your answer: ");
    if (!Object.hasOwn(riddleObj, "choices")) {
      if (answer === riddleObj.correctAnswer) {
        console.log("Good Job");
        isCorrect = true;
      } else {
        console.log("Try again");
      }
    } else {
      const answerIdx = Number(riddleObj.correctAnswer);
      if (Number(answer) - 1 === answerIdx) {
        console.log("Good Job");
        isCorrect = true;
      } else {
        console.log("Try again");
      }
    }
  }
}

function measureSolveTime(fn, argument, riddleNumber) {
  const startMinutes = new Date().getMinutes();
  const startSeconds = new Date().getSeconds();
  fn(argument, riddleNumber);
  const stopMinutes = new Date().getMinutes();
  const stopSeconds = new Date().getSeconds();

  const minutesDiff = stopMinutes - startMinutes;
  const secondsDiff = stopSeconds - startSeconds;

  return minutesDiff * 60 + secondsDiff;
}

function sortRiddles(riddles) {
  riddles.sort((a, b) => a.sort - b.sort)

}

