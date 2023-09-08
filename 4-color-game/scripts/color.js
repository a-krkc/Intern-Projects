//!
function changeColor(eOrH) {
  getRGB = getRandomColor();
  getRGB === "rgb(52, 53, 65)" && (getRGB = getRandomColor());
  rgbText.textContent = getRGB;

  if (eOrH === "easy") {
    threeBoxes.map((box) => (box.style.background = getRandomColor()));
    getRandomBoxFromArray(threeBoxes).style.background = getRGB;
  } else {
    boxesAll.map((box) => (box.style.background = getRandomColor()));
    getRandomBoxFromArray(boxesAll).style.background = getRGB;
  }
}

//!
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  return rgbColor;
}

//!
function getRandomBoxFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//!
function changeNew() {
  reset();
  easy.className === "clicked" ? changeColor("easy") : changeColor("hard");
}

//!
function allColorize() {
  boxesAll.map((i) => (i.style.backgroundColor = getRGB));
  rgbArea.style.backgroundColor = getRGB;
  newColor.textContent = "Play Again!";
  newColor.style.animation = "animate .6s infinite alternate";
  removeListeners();
}
