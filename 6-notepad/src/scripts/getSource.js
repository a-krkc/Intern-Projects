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
  document.execCommand("createLink", false, url);
}
//! ------------------------------------------------------------------------------------------------
export function addLink() {
  const url = prompt(
    "Please insert an url for selected text:",
    "https://www.example.com"
  );

  if (url === "" || url === "none") {
    document.execCommand("unlink", false, null);
  } else {
    document.execCommand("createLink", false, url);
  }
}
//! ------------------------------------------------------------------------------------------------
