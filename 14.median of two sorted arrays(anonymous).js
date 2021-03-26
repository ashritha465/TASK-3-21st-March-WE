//6. Return median of two sorted arrays of same size 
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);});
inp.on("close", () =>{
  //start-here// Anonnymous 
var anon = function() {
function bruteForce(nums1 = [], nums2 = []) {
  const mergedNums = [...nums1, ...nums2].sort((a, b) => a - b);
  const midPoint = Math.floor(mergedNums.length / 2);
  return mergedNums.length % 2 !== 0
    ? mergedNums[midPoint]
    : (mergedNums[midPoint - 1] + mergedNums[midPoint]) / 2;
}
// merge sort
// complexity O(n + m)
function findMedianSortedArrays(nums1 = [], nums2 = []) {
  let i1 = 0;
  let i2 = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;
  if (len === 0) {
    return null;
  }
  const merged = [];
  while (i1 < len1 && i2 < len2) {
    if (nums1[i1] <= nums2[i2]) {
      merged.push(nums1[i1++]);
    } else {
      merged.push(nums2[i2++]);
    }
  }
  while (i1 < len1) {
    merged.push(nums1[i1++]);
  }
  while (i2 < len2) {
    merged.push(nums2[i2++]);
  }
  const isOdd = len % 2;
  if (isOdd) {
    return merged[(len - 1) / 2];
  } else {
    return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
  }
}
const nums1 = [1,3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2))
}
anon();
});
