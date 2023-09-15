export function saveToStorage() {
  let editorValue;
  document.getElementById("input").innerHTML
    ? (editorValue = document.getElementById("input").innerHTML)
    : (editorValue = "");

  console.log(editorValue);

  localStorage.setItem("editorValue", JSON.stringify(editorValue));
}

export function getTextFromStorage() {
  const getText = JSON.parse(localStorage.getItem("editorValue"));
  console.log(getText);

  if (getText !== "") {
    return getText;
  }
}
