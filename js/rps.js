"use strict";
let score = 0;
console.log("You have " + score + " points");
let Attempts = 4;
console.log("You have " + Attempts + " left");
let user = prompt("what is your name?");
alert("Hello " + user);

const img = document.querySelector("#rock");
const container2 = document.querySelector("#paper");
const container3 = document.querySelector("#scissors");
const result = document.querySelector(".button");

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);
function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Win!" : "You Lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You Win!" : "You Lose!";
  }
}

document.getElementById = rps_intro_user();
