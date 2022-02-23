function changeWord1(selectedText, changeText, text) {
  let caseSensitive = new RegExp(selectedText, "i"); //regEx for case sensitive
  //   select case sensitive text and change to lower case
  let lower = text.replace(caseSensitive, selectedText.toLowerCase()); //change text to lower
  let caseGlobal = new RegExp(selectedText.toLowerCase(), "g"); //regEx for global case
  //   change text to lower and selectedText with caseGlobal
  let newText = lower.replace(caseGlobal, changeText); //replace string
  return newText;
}

// change text sapi to kambing
console.log(
  changeWord1(
    "sapi",
    "kambing",
    "saya suka memakan olahan daging Sapi seperti gulai sapi"
  )
);
