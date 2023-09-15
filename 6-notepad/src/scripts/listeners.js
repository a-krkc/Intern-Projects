// function log() {
//   const btnArray = document.querySelectorAll(".btn");
//   document.getElementById("input").innerHTML = Array.from(btnArray).map(
//     (_) => " " + _.getAttribute("data-tooltip")
//   );
// }

import { boldStyle, italicStyle, underlineStyle } from "./fontStyles.js";
import { alignLeft, alignCenter, alignRight, justify } from "./alignment.js";
import { unorderedList, orderedList } from "./toList.js";
import { fontFamily, backgroundColor, fontColor, fontSize } from "./fontP.js";
import { insertImage, addLink } from "./getSource.js";
import { getTextFromStorage, saveToStorage } from "./storage.js";

export default function init() {
  const btnArray = document.querySelectorAll(".btn");
  const funcArray = [
    boldStyle,
    italicStyle,
    underlineStyle,
    alignLeft,
    alignCenter,
    alignRight,
    justify,
    unorderedList,
    orderedList,
    fontFamily,
    backgroundColor,
    fontColor,
    fontSize,
    insertImage,
    addLink,
    saveToStorage,
  ];

  Array.from(btnArray).map(($, i) => {
    $.addEventListener("click", funcArray[i]);
  });

  window.onload = document.getElementById("input").innerHTML =
    getTextFromStorage();
}
