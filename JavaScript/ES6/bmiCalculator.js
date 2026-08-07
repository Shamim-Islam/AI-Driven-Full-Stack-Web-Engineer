// BMI Calculator (Arrow Refactor)

let calculateBMI = (weight, height) => {
  // validation
  if (weight <= 0 || height <= 0) {
    return "Invalid";
  }

  let BMI = weight / (height * height);
  return Number(BMI.toFixed(2));
};

console.log(calculateBMI(70, 1.75))
console.log(calculateBMI(50, 1.6))
console.log(calculateBMI(60, -1.7))