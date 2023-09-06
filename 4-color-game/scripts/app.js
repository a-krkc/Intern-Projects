const gridContainer = document.querySelector(".grid-container");
const rgbArea = document.querySelector(".rgb-area");
const rgbText = document.getElementById("rgb");
const newColor = document.getElementById("new-color");
const state = document.getElementById("state");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const modal = document.querySelector("[data-modal]");
const easyButton = document.querySelector("[easy-button]");
const hardButton = document.querySelector("[hard-button]");
let boxesAll = [];
let threeBoxes = [];
let getRGB;
init();

function init() {
  //? modal
  document.addEventListener("DOMContentLoaded", firstLoad);
  easyButton.addEventListener("click", easyGame);
  hardButton.addEventListener("click", hardGame);

  easy.addEventListener("click", easyGame);
  hard.addEventListener("click", hardGame);
  newColor.addEventListener("click", changeNew);
  gridContainer.addEventListener("click", gridListener);
  selectBoxes();
}

//!
function selectBoxes() {
  for (let i = 1; i < 7; i++) {
    boxesAll.push(document.querySelector(`.box-${i}`));
  }
  for (let i = 0; i < 3; i++) {
    threeBoxes.push(boxesAll[i]);
  }
}
