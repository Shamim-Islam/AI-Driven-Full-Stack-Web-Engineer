// different types of parameter for a function

function fullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

const mishu = fullName("Mishu", "Showdagor");
const nilu = fullName("nilu", "Showdagor");
// console.log(mishu, nilu);

//

function doubleOrHalf(price, isDouble) {
  if (isDouble) {
    const askingPrice = price * 2;
    return askingPrice;
  } else {
    const askingPrice = price / 2;
    return askingPrice;
  }
}

const forMangoPepole = doubleOrHalf(200, true);
// console.log(forMangoPepole);

const forLeader = doubleOrHalf(200, false);
// console.log(forLeader);


function firstElementDouble(array) {
    console.log('got the parameter values', array);
    const firstElement = array[0];
    const doubled = firstElement * 2;
    return doubled;
}

const numbers = [5, 4, 10, 98, 65, 27];
const doubled = firstElementDouble(numbers)
console.log('the calculation result of first element', doubled)