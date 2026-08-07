// Problem 6: Count Vowels in a String

// Vowels -> a e i o u

// without function
// let str = "Programming Hero";

// let vowels = "aeiou";

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   let letter = str[i];
//   console.log("i,  -> letter ->>> ", i, letter);
//   if (vowels.includes(letter)) {
//     console.log("vowel");
//     count++;
//   }
// }

// console.log("count is ---->", count);

// with function
function countVowel(str) {
  let vowels = "aeiou";

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log("i,  -> letter ->>> ", i, letter);
    if (vowels.includes(letter)) {
      console.log("vowel");
      count++;
    }
  } 
  return count;
}

console.log(countVowel('Beatifull Bangladesh'))
