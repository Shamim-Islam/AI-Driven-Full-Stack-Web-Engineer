// Input: a number 
// Output: the number with digits reversed 
// Returns: a number 
  
function reverseNumber(num) { 
  let str = num.toString();
  let revNum = Number(str.split('').reverse().join(''));
  return revNum;

} 
  
console.log(reverseNumber(1234)); // Expected: 4321 
console.log(reverseNumber(1992089543)); // Expected: 4321 
console.log(reverseNumber(7));    // Expected: 7