import riddle1 from "../riddles/r1.js";
import riddle2 from "../riddles/r2.js";
import input from "analiza-sync";

function printRiddle(riddleObj) {
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
      if ((Number(answer) - 1) === answerIdx) {
        console.log("Good Job");
        isCorrect = true;
      } else {
        console.log("Try again");
      }
    }
  }
}

function  measureSolveTime(fn,argument) {
    const startMinutes = new Date().getMinutes()
    const startSeconds = new Date().getSeconds()
    fn(argument)
    const stopMinutes = new Date().getMinutes()
    const stopSeconds = new Date().getSeconds()

    const minutesDiff = stopMinutes - startMinutes
    const secondsDiff = stopSeconds - startSeconds
    console.log((minutesDiff * 60) + secondsDiff);
    return (minutesDiff * 60) + secondsDiff
}

measureSolveTime(printRiddle,riddle2)
// printRiddle(riddle2);
