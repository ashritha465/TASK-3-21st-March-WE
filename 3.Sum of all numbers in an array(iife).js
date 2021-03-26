//3. Sum of all numbers in an array  using IIFE (immediately invoked function expression)
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);});
inp.on("close", () =>{
 //start-here
 //Sum of all numbers in an array  using IIFE (immediately invoked function expression)
(function () {
a=userInput[0]
arr=a.split(" ")
sum=0
for(i=0;i<arr.length;i++)
{
sum=sum+parseInt(arr[i])
}
console.log(sum)
})()
//end here
});

