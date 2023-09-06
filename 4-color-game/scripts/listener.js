//!
function firstLoad() {
  document.addEventListener(
    "keydown",
    (e) => e.key === "Escape" && e.preventDefault()
  );
  modal.showModal();
}

//!
function gridListener(e) {
  let computedBgColor;
  let getBox;

  if (e.target.className === "layer") {
    boxesAll.filter(
      (i) =>
        i.className === e.target.parentElement.className &&
        ((computedBgColor = getComputedStyle(i).backgroundColor), (getBox = i))
    );
    computedBgColor === getRGB ? choise(true, getBox) : choise(false, getBox);
  }
}

//!
function removeListeners() {
  gridContainer.removeEventListener("click", gridListener);
  easy.removeEventListener("click", easyGame);
  hard.removeEventListener("click", hardGame);
}

//!
function reInitListeners() {
  easy.addEventListener("click", easyGame);
  hard.addEventListener("click", hardGame);
  gridContainer.addEventListener("click", gridListener);
}
