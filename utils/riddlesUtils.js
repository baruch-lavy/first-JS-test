import input from "analiza-sync";

export default {
  printRiddle,
  askRiddle,
  measureSolveTime,
  sortRiddles
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
  const startSeconds = new Date().getTime();
  fn(argument, riddleNumber);
  const stopSeconds = new Date().getTime();
  return (stopSeconds - startSeconds) / 1000;
}

function sortRiddles(riddles) {
  riddles.sort((a, b) => a.sort - b.sort);
  return riddles
}
