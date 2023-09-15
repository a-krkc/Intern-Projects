//! ------------------------------------------------------------------------------------------------
export function boldStyle() {
  const selectedText = window.getSelection().toString();
  let boldText = "<b>" + selectedText + "</b>";

  if (document.queryCommandState("bold")) {
    document.execCommand("bold");
  } else {
    document.execCommand("insertHTML", false, boldText);
  }
}
//! ------------------------------------------------------------------------------------------------
export function italicStyle() {
  const selectedText = window.getSelection().toString();
  let italicText = "<i>" + selectedText + "</i>";
  if (document.queryCommandState("italic")) {
    document.execCommand("italic");
  } else {
    document.execCommand("insertHTML", false, italicText);
  }
}
//! ------------------------------------------------------------------------------------------------
export function underlineStyle() {
  const selectedText = window.getSelection().toString();
  let underlineText = "<u>" + selectedText + "</u>";
  if (document.queryCommandState("underline")) {
    document.execCommand("underline");
  } else {
    document.execCommand("insertHTML", false, underlineText);
  }
}
//! ------------------------------------------------------------------------------------------------
