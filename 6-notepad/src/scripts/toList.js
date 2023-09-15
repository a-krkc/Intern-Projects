//!
export function unorderedList() {
  const selectedText = window.getSelection().toString();
  const listText = "<ul><li>" + selectedText + "</li></ul>";
  document.execCommand("insertHTML", false, listText);
}
//!
export function orderedList() {
  const selectedText = window.getSelection().toString();
  const listText = "<ol><li>" + selectedText + "</li></ol>";
  document.execCommand("insertHTML", false, listText);
}
