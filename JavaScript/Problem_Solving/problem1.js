// Problem 1: Check if a Number is Even or Odd

// without function
// let number = 9;

// if(number % 2 === 0) {
//     console.log('even number');
// } else {
//     console.log('odd number')
// }

// with function

function checkEvenOrOdd(number) {
    if(number % 2 === 0) {
        return 'even number';
    } else {
        return 'odd number'
    }
}

console.log(checkEvenOrOdd(13))
console.log(checkEvenOrOdd(12))
