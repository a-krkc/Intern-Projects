//! ------------------------------------------------------------------------------------------------
export function fontFamily() {
  const getFamily = prompt("Font family: ", "Arial - 'san serif' - Monospace");

  if (getFamily !== "") {
    document.getElementById("input").style = `font-family: ${getFamily}`;
  }
}
//! ------------------------------------------------------------------------------------------------
export function backgroundColor() {
  const getColor = prompt(
    "Font background color: ",
    "example: blue or enter empty value to clear"
  );
  let color;
  if (getColor.includes("#") || getColor.includes("rgb")) {
    color = "none";
  } else {
    color = getColor;
  }
  const selectedText = window.getSelection().toString();
  const styledText = `<span style="background-color:${color};">${selectedText}</span>`;
  document.execCommand("insertHTML", false, styledText);
}
//! ------------------------------------------------------------------------------------------------
export function fontColor() {
  const getColor = prompt(
    "Font color: ",
    "example: blue or enter empty value to clear"
  );
  let color;
  if (getColor.includes("#") || getColor.includes("rgb")) {
    color = "none";
  } else {
    color = getColor;
  }
  const selectedText = window.getSelection().toString();
  const styledText = `<span style="color:${color};">${selectedText}</span>`;
  document.execCommand("insertHTML", false, styledText);
}
//! ------------------------------------------------------------------------------------------------
export function fontSize() {
  const getSize = Number(
    prompt(
      "Font Size: ",
      "example: between 16 - 32 or enter empty value to default(28)"
    )
  );
  if (getSize >= 16 && getsize <= 32) {
    document.getElementById("input").style = `font-size: ${getSize}px`;
  } else {
    document.getElementById("input").style = `font-size: 28px`;
  }
}
//! ------------------------------------------------------------------------------------------------
