/*
  Problem 3: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

function calculateTotal(discount, ...prices) {
  // console.log(discount, prices)
  // let total = 0;
  // for(let i=0; i <prices.length; i++) {
  //     total += prices[i];
  // }
  // console.log(total);
  let total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  let discountAmount = (total * discount) / 100;
  let totalAfterDiscountApply = total - discountAmount;
//   console.log(totalAfterDiscountApply);
return totalAfterDiscountApply;

}
console.log(calculateTotal(10, 100, 200, 50, 300));
