const fs =  require("fs");
// Now, let's say there is a file 
// that you want to read, then we specify 
// the name and the character encoding
const text = fs.readFileSync("file.txt", "utf-8");
//2. Let's say you want to show some other results
// text = text.replace 
// Then for the results to be shown to us in the output 
console.log("the content of the file is: \n")
console.log(text);