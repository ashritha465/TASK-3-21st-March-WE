//2.	Convert all the strings to title caps in a string array IIFE (immediately invoked function expression)
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);});
inp.on("close", () =>{
 //start-here
 //Convert all the strings to title caps in a string array  using IIFE (immediately invoked function expression)
(function () {
str=userInput[0]
str = str.toLowerCase().split(' ');
for (var i = 0; i < str.length; i++) {
	str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
y= str.join(' ');
console.log(y)
})()
//end here
});
