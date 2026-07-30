// Problem 9: Find the Largest Number in an Array

// without function
let arr = [500, 120, 50, 1020, 6429, 123, 6430, 9454];
// let largest = arr[0];

// for(let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];
//     if(currentElement > largest) {
//         largest = currentElement;
//     }
// }

// console.log('largest number', largest)

// with function
function largestNumChecker(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement > largest) {
      largest = currentElement;
    }
  }
  return largest;
}

console.log("largest number: --> ", largestNumChecker(arr));
