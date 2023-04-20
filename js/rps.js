"use strict";
let points = 0;
console.log("You have " + points + " points");
let Attempts = 4;
console.log("You have " + Attempts + " left");
let user = prompt("what is your name?");
alert("Hello " + user);

//const rock = document.querySelector(".container1");
//const paper = document.querySelector(".container2");
//const scissors = document.querySelector(".container3");
//const score = document.querySelector(".score");

let rps = ["rock", "paper", "scissors"];

let rpsResult = function () {
  let rpsPicker = Math.floor(Math.random() * 3);
  if (rpsPicker === 0) {
    console.log("Rock");
  } else if (rpsPicker === 1) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
};

const choice = document.getElementsByClassName("choice");
choice.array.forEach((element) => {
  addEventListener("click")[rpsResult];
});
