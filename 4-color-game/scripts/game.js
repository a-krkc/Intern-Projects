//!
function easyGame() {
  modal.open && modal.close();

  if (easy.className === "clicked") {
    return;
  }

  boxesAll.filter((box, index) => index > 2 && (box.style.display = "none"));
  easy.classList.add("clicked");
  hard.classList.remove("clicked");

  boxVisible();
  changeColor("easy");
}

//!
function hardGame() {
  modal.open && modal.close();

  if (hard.className === "clicked") {
    return;
  }

  boxesAll.map((box) => (box.style.display = "block"));
  hard.classList.add("clicked");
  easy.classList.remove("clicked");

  boxVisible();
  changeColor("hard");
}

//! color
function choise(truthy, box) {
  truthy
    ? (displayBlock(box), displayText(true), allColorize(box))
    : (displayBlock(box), displayText(false), boxHidden(box));
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
