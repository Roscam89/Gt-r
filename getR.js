"use strict";

let winingNumbers = [];
const wNumbDisplay = document.querySelector(".winingnumbers");
const pBallDisplay = document.querySelector(".powerball");
const btnGetRich = document.querySelector(".btnGetRich");

const getWiningNumbers = function () {
  while (winingNumbers.length < 5) {
    let rWiningNumbers = Math.floor(Math.random() * 69 + 1);
    if (!winingNumbers.includes(rWiningNumbers))
      winingNumbers.push(rWiningNumbers);
  }
  winingNumbers.sort(function (a, b) {
    return a - b;
  });
  let powerBall = Math.floor(Math.random() * 26 + 1);
  wNumbDisplay.innerHTML = winingNumbers;
  pBallDisplay.innerHTML = powerBall;
  winingNumbers = [];
};

btnGetRich.addEventListener("click", function (e) {
  getWiningNumbers();
});
