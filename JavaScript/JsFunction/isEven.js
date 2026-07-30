function isEven(number) {
  console.log(number % 2);
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const result = isEven(7);
console.log("is Even", result);
