//8. Rotate an array by k times and return the rotated array using IIFE.
 const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);});
inp.on("close", () =>{
  //start-here
(function(){
function rotLeft(arr, rotations) {
  const rotatedArray = arr.concat();
  for (let i = 0; i < rotations; i++) {
    const frontItem = rotatedArray.shift();
    rotatedArray.push(frontItem);
  }
  return rotatedArray;
}
const numRotation = 4;
const sampleArray = [1, 2, 3, 4, 5];
console.log(rotLeft(sampleArray, numRotation));
})();
});
