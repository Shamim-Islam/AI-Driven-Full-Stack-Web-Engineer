// Problem 5: Reverse a String

// using split, reverse and join
let str = "i love you";

// let result = str.split("").reverse().join("");
// // console.log(result);

//  using for loop

// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

//  using for of
// let reversed = '';

// for (const char of str) {
//  reversed = char + reversed;
// }
// console.log(reversed);

// with function
function reverseWord(str) {
  let reverseWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverseWord += letter;
  }
  return reverseWord;
}

console.log(reverseWord(str));
