const gridContainer = document.querySelector(".grid-container");
const rgbArea = document.querySelector(".rgb-area");
const rgbText = document.getElementById("rgb");
const newColor = document.getElementById("new-color");
const state = document.getElementById("state");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const modal = document.querySelector("[data-modal]");
const boxesAll = crateBoxes();
const threeBoxes = boxesAll.slice(0, 3);
let getRGB;
init();
const spans = getSpans();

function init() {
  //? modal
  document.addEventListener("DOMContentLoaded", firstLoad);

  easy.addEventListener("click", easyGame);
  hard.addEventListener("click", hardGame);
  newColor.addEventListener("click", changeNew);
  gridContainer.addEventListener("click", gridListener);
  renderBoxes();
}

//!
function crateBoxes() {
  // const boxes = Array(6).fill().map((_, index) => {
  const boxes = Array.from({ length: 6 }).map((_, index) => {
    const box = document.createElement("div");
    const layer = document.createElement("div");
    const span = document.createElement("span");

    box.className = `box-${index + 1}`;
    layer.className = "layer";
    span.textContent = "Choose";

    layer.appendChild(span);
    box.appendChild(layer);

    return box;
  });
  return boxes;
}

//!
function renderBoxes() {
  boxesAll.map((box) => gridContainer.appendChild(box));
  // console.log(boxesAll);
  // console.log(threeBoxes);
}

//!
function getSpans() {
  const s = Array.from(document.querySelectorAll(".layer>span"));
  return s;
}
