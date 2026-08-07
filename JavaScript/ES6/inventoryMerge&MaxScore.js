// inventory merge and max score

// merge inventory
let mergeInventory = (arr1, arr2) => {
  // validation
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  return [...arr1, ...arr2];
};

console.log(mergeInventory([1, 2], [3, 4]));

// max score

let highestScore = (scores) => {
  // validation
  if (!Array.isArray(scores)) {
    return "Invalid";
  }
  return Math.max(...scores);
};

console.log(highestScore([3, 7, 2, 9, 4]));
console.log(highestScore("3,7,2"));
