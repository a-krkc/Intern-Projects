//!
function displayNone($) {
  $.style.display = "none";
}

//!
function displayBlock($) {
  $.style.display = "block";
}

//!
function displayText(_) {
  _ ? (state.innerText = "CONGRATULATIONS!") : (state.innerText = "Try Again!");
}

//!
function boxHidden(_) {
  boxesAll.find((i) => i === _ && (i.style.visibility = "hidden"));
}

//!
function boxVisible() {
  boxesAll.map((i) => (i.style.visibility = "visible"));
  stateTextReset();
}

//!
function stateTextReset() {
  state.innerText = "";
}
