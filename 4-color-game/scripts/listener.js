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
  const className = e.target.className;
  const parent = e.target.parentElement;
  if (className === "layer") {
    const computedBgColor = getComputedStyle(parent).backgroundColor;
    const foundIndex = boxesAll.findIndex((i) => {
      return getComputedStyle(i).backgroundColor === computedBgColor;
    });

    computedBgColor === getRGB
      ? choise(true, foundIndex)
      : choise(false, foundIndex);
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
