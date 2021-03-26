//7. Remove duplicates from an array 
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);});
inp.on("close", () =>{
  //start-here// Anonnymous 
var anon = function() {function getUnique(arr){
    let uniqueArr = [];
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array = [1, 2, 3, 2, 3];
// calling the function
// passing array argument
getUnique(array);
}
anon();
});
