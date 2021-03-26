//1.To print odd numbers in an array using IIFE (immediately invoked function expression)
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);});
inp.on("close", () =>{
 //start-here
 //To print odd numbers in an array using IIFE (immediately invoked function expression)
(function() {
var a=userInput[0]
var arr=a.split(" ")
for(i=0;i<arr.length;i++)
 if(arr[i]%2!==0)
console.log(arr[i]) 
})();
//end here
});




