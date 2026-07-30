// 1. How to declare function
function firstFunction() {}

// 2. how to call a function
firstFunction();

// 3. how to deal with parameter
function divide(num1, num2) {
  const result = num1 / num2;
  console.log("divide result", result);
}

divide(500, 8);

// 4. how to deal with return
function doMath(a, b, c, d) {
  const firstSum = a + b;
  const secondSum = c + d;
  const multiplied = firstSum * secondSum;
  const divided = multiplied / 4;
  return divided;
}

const result = doMath(4, 88, 45, 63);
