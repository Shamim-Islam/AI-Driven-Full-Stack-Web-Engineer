// factorial of a number

// without number
let number = 5;
let result = 1;
for (let i = 1; i <= number; i++) {
  result = result * i;
  // console.log(i, result)
}

// with function

function getFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

let factorialOfFour = getFactorial(4);
let factorialOfeight = getFactorial(8);
console.log("factorialOfFour", factorialOfFour);
console.log("factorialOfeight", factorialOfeight);
