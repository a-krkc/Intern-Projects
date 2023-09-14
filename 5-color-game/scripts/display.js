//!
function displayNone($) {
  $.style.display = "none";
}

//!
function displayBlock($) {
  $.style.display = "block";
}

//!
function displayText($) {
  $
    ? (state.textContent = "CONGRATULATIONS!")
    : (state.textContent = "Try Again!");
}

//!
function boxHidden($) {
  boxesAll[$].style.visibility = "hidden";
}

//!
function boxVisible() {
  boxesAll.map((i) => (i.style.visibility = "visible"));
}

//!
function stateTextReset() {
  state.textContent = "";
  addOrDeleteChoose(true);
}

//!
function addOrDeleteChoose($) {
  $
    ? spans.map((i) => (i.textContent = "Choose"))
    : spans.map((i) => (i.textContent = ""));
}
