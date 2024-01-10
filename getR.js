"use strict";

let winingNumbers = [];
const wNumbDisplay = document.querySelector(".wining-numbers");
const pBallDisplay = document.querySelector(".powerball");
const btnGetRich = document.querySelector(".btnGetRich");
const ballNumbers = document.querySelector(".circlebar");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");

const getWiningNumbers = function () {
  while (winingNumbers.length < 5) {
    let rWiningNumbers = Math.floor(Math.random() * 69 + 1)
      .toString()
      .padStart(2, 0);
    if (!winingNumbers.includes(rWiningNumbers))
      winingNumbers.push(rWiningNumbers);
  }
  winingNumbers.sort(function (a, b) {
    return a - b;
  });

  let powerBall = Math.floor(Math.random() * 26 + 1);
  // wNumbDisplay.innerHTML = winingNumbers.join(" ");
  pBallDisplay.innerHTML = powerBall.toString().padStart(2, 0);
  c1.innerHTML = winingNumbers[0];
  c2.innerHTML = winingNumbers[1];
  c3.innerHTML = winingNumbers[2];
  c4.innerHTML = winingNumbers[3];
  c5.innerHTML = winingNumbers[4];
  winingNumbers = [];
};

btnGetRich.addEventListener("click", function (e) {
  ballNumbers.style.visibility = "visible";
  getWiningNumbers();
});

const comapringArr = function (a, b) {
  while (winingNumbers.length < 5) {
    let rWiningNumbers = Math.floor(Math.random() * 69 + 1)
      .toString()
      .padStart(2, 0);
    if (!winingNumbers.includes(rWiningNumbers))
      winingNumbers.push(rWiningNumbers);
  }
  winingNumbers.sort(function ([a], [b]) {
    return a - b;
  });

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
    // winingNumbers = [];
  }
  return true;
};

console.log(winingNumbers);
