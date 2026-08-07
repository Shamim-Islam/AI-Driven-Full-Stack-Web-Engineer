// Problem 7: Check if a String is a Palindrome

// let str = "rir";
// let reverseStr = str.split("").reverse().join("");

// if (str === reverseStr) {
//   console.log("its palindrome");
// } else {
//   console.log("its not palindrome");
// }

// without function
// let str = "civic";
// let reversStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reversStr += letter;
// }
// if (str === reversStr) {
//   console.log("its palindrome str");
// } else {
//   console.log("its not palindrome str");
// }

// with function

function isPalindrome(str) {
  let reversStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reversStr += letter;
  }
  if (str === reversStr) {
    return "its palindrome str";
  } else {
    return "its not palindrome str";
  }
}

console.log(isPalindrome('madam'))