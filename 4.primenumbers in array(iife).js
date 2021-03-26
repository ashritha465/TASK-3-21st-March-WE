//4. to return all the prime numbers in an array using IIFE
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);});
inp.on("close", () =>{
  //start-here
  //to return all the prime numbers in an array using IIFE
(function(){
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10,11]
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) 
  {
    if (number % i === 0) 
    return false;
  }
  return true;
});
console.log(numArray);
})();
});
