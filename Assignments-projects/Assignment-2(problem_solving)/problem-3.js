// Problem 3 — AI Token Cost Calculator

function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
  let freeToken = 500;
  if(tokensUsed > freeToken) {
    let aiCost = (tokensUsed - freeToken) / 100;  
    return Math.floor(aiCost) * 5; 

  } else {
    return 0;
  }
}

console.log(calculateAiCost(300))
console.log(calculateAiCost(500))
console.log(calculateAiCost(650))
console.log(calculateAiCost(1000))
console.log(calculateAiCost(-10))
console.log(calculateAiCost('500'))
console.log(calculateAiCost(700))