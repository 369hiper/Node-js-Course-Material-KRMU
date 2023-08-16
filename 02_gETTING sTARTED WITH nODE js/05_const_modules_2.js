// We are going to try now replace some text in my file using the F S module 
// we're going to look for a specific word and replace that
//Then we're going to create a new file with that updated sentence
const fs = require("fs");
let text = fs.readFileSync("file.txt", "utf-8");
text = text.replace("content", "rohan");

console.log("The content of file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text)