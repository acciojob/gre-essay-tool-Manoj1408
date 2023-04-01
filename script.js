//your code here
const data = document.getElementById("evaluatedText");

 data.addEventListener("input", () => {
   var textLn = data.value;
   document.getElementById("wordCount").innerHTML =
     getWordCount(textLn);
 });

 function getWordCount(str) {
   return str.trim().split(/\s+/).length;
 }
