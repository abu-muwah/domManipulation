"use strict";

// let todoList = [];

// const addButton = document.getElementById("add");
// const input = document.getElementById("input");

// addButton.addEventListener("click", function () {
//   if (input.value == "") return;

//   console.log("here");
//   todoList.push(input.value);
//   input.value = "";
//   console.log(todoList);
// });

// document.querySelector(".add-btn").addEventListener("click", function () {
//   console.log(document.querySelector(".input").value);
// });

// document.querySelector(".page-title").textContent = "Guess Your Number";
// document.querySelector("a").style.backgroundColor = "#999";
// document.querySelector("a").style.color = "black";

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore;

const setTextContent = (element, value) => {
   document.querySelector(element).textContent = value;
};

document.querySelector("body").style.backgroundColor = "value";

document.querySelector(".add-btn").addEventListener("click", function () {
   const guess = Number(document.querySelector(".input").value);

   if (!guess) {
      document.querySelector(".msg").textContent = "No Number :(";
   }else if (guess === secretNumber) {
      document.querySelector("body").style.backgroundColor = "green";
      setTextContent(".number", secretNumber);
      setTextContent(".msg", "Congrats!! You Did it");
      // document.querySelector(".input&btn").style.display = none;
      highscore = score;
      setTextContent(".highscore", highscore);
   }else if (guess > secretNumber) {
      if (score > 1) {
         setTextContent(".msg", "Too High!");
         score--;
         setTextContent(".score", score);
      }else {
         document.querySelector("body").style.backgroundColor = "red";
         setTextContent(".msg", "Nahh, get outta here!");
         setTextContent(".score", 0);
      }
   }else if (guess < secretNumber) {
      if (score > 1) {
         setTextContent(".msg", "Too Low!");
         score--;
         setTextContent(".score", score);
      }else {
         document.querySelector("body").style.backgroundColor = "red";
         setTextContent(".msg", "Nahh, get outta here!");
         setTextContent(".score", 0);
      }
   }
});

document.querySelector(".relaod").addEventListener("click", function () {
   score = 20;
   setTextContent(".score", score);
});
