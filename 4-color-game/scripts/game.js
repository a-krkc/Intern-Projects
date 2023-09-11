//!
function easyGame() {
  modal.open && modal.close();

  if (easy.className === "clicked") {
    return;
  }

  boxesAll.filter((box, index) => index > 2 && displayNone(box));

  easy.className = "clicked";
  hard.className = "";

  boxVisible();
  changeColor("easy");
}

//!
function hardGame() {
  modal.open && modal.close();

  if (hard.className === "clicked") {
    return;
  }

  boxesAll.map((box) => displayBlock(box));

  hard.className = "clicked";
  easy.className = "";

  boxVisible();
  changeColor("hard");
}

//! color
function choise(truthy, boxIndex) {
  truthy
    ? (displayText(true), allColorize(), addOrDeleteChoose())
    : (displayText(false), boxHidden(boxIndex));
}

//!
function reset() {
  boxVisible();
  reInitListeners();
  newColor.textContent = "NEW COLORS";
  rgbArea.style.backgroundColor = "rgb(30, 132, 180)";
  newColor.style.animation = "none";
  stateTextReset();
}
