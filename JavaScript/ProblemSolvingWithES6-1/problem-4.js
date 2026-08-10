/*
  Problem 4: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

let margeArr = [...arr1, ...arr2];

console.log(margeArr);

// let newArr = [...new Set(margeArr)];
let newArr = Array.from(new Set(margeArr))
console.log(newArr);
