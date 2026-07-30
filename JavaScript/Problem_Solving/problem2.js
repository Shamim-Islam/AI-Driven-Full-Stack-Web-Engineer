// Problem 2: Sum of a Range of Numbers (1 to N)

// without function
let number = 9;
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
// console.log(sum);

// with function

function sumRange(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    // console.log(i)
  }
  return (sum);
}

let sumResultOfSeven = sumRange(7);
console.log(`sum result of  -->`, sumResultOfSeven);
