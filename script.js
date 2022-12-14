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

const generateRandomNumber = () => {
   return Math.trunc(Math.random() * 20 + 1);
}

let secretNumber = generateRandomNumber();
console.log(secretNumber)

let score = 20;
let highscore;

const setTextContent = (element, value) => {
   document.querySelector(element).textContent = value;
};

document.querySelector("body").style.backgroundColor = "#4a5759";

document.querySelector(".add-btn").addEventListener("click", function () {
   const guess = Number(document.querySelector(".input").value);

   // when there is no guess at all
   if (!guess) {
      document.querySelector(".msg").textContent = "No Number :(";
      
      // when the guess is correct
   }else if (guess === secretNumber) {
      document.querySelector("body").style.backgroundColor = "green";
      setTextContent(".number", secretNumber);
      setTextContent(".msg", "Congrats!! You Did it");
      highscore = score;
      setTextContent(".highscore", highscore);

      // when the guess is wrong
   }else if (guess !== secretNumber) {
      if (score > 1) {
         document.querySelector('.msg').textContent = guess > secretNumber ? "Too High!! Try Lower" : "Too Low!! Try Higher"
         score--;
         setTextContent(".score", score);

         // when user run out of score
      }else {
         document.querySelector("body").style.backgroundColor = "red";
         setTextContent(".msg", "Nahh, get outta here!");
         setTextContent(".score", 0);
      }
   }
});

document.querySelector(".reset").addEventListener("click", function () {
   score = 20;
   setTextContent(".score", score);
   document.querySelector("body").style.backgroundColor = "#4a5759";
   setTextContent('.number', '?')
   setTextContent('.msg', 'Start Guessing!!')
   setTextContent('.input', '')
   secretNumber = generateRandomNumber()

});
