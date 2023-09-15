//! ------------------------------------------------------------------------------------------------
export function insertImage() {
  const getImageUrl = prompt(
    "Please insert a picture url:",
    "https://example.com/image.jpg"
  );

  if (getImageUrl !== null || getImageUrl !== "") {
    const imgTag = '<img src="' + getImageUrl + '" alt="Resim" width="250">';
    document.execCommand("insertHTML", false, imgTag);
  }
}
//! ------------------------------------------------------------------------------------------------
export function addLink() {
  const url = prompt(
    "Please insert an url for selected text:",
    "https://www.example.com"
  );

  if (url !== null || url !== "") {
    const selectedText = window.getSelection().toString();
    const linkText =
      '<a href="' +
      url +
      '" target="_blank" style="cursor: pointer;">' +
      selectedText +
      "</a>";

    document.execCommand("insertHTML", false, linkText);
  }
}
//! ------------------------------------------------------------------------------------------------
