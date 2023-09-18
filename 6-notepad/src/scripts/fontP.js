//! ------------------------------------------------------------------------------------------------
export function fontFamily() {
  const getFamily = prompt(
    "Font family: ",
    "Arial - 'san serif' - Monospace - none or empty to default"
  );

  if (getFamily === "" || getFamily === "none") {
    document.getElementById("input").style = `font-family: "san serif"`;
  } else {
    document.getElementById("input").style = `font-family: ${getFamily}`;
  }
}
//! ------------------------------------------------------------------------------------------------
export function backgroundColor() {
  const color = prompt(
    "Font background color: ",
    "example: blue or enter empty-none to clear"
  );

  if (color === "none" || color === "") {
    document.execCommand("removeFormat", false, null);
  } else {
    document.execCommand("hiliteColor", false, color);
  }
}
//! ------------------------------------------------------------------------------------------------
export function fontColor() {
  const color = prompt(
    "Font color: ",
    "example: blue or enter empty value to clear"
  );
  if (color === "none" || color === "") {
    document.execCommand("removeFormat", false, null);
  } else {
    document.execCommand("foreColor", false, color);
  }
}
//! ------------------------------------------------------------------------------------------------
export function fontSize() {
  const getSize = Number(
    prompt(
      "Font Size: ",
      "example: between 16 - 32 or enter empty value to default(28)"
    )
  );
  if (getSize >= 16 && getSize <= 32) {
    document.getElementById("input").style = `font-size: ${getSize}px`;
  } else {
    document.getElementById("input").style = `font-size: 28px`;
  }
}
//! ------------------------------------------------------------------------------------------------
