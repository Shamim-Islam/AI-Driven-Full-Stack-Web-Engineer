// function bonusScore(scores) {
//   if (
//     !Array.isArray(scores) ||
//     scores.length === 0 ||
//     !scores.every(score => typeof score === "number")
//   ) {
//     return "Invalid";
//   }

//   return scores
//     .map(score => score + 10)
//     .reduce((total, score) => total + score, 0);
// }

function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  for (const score of scores) {
    if (typeof score !== "number" || Number.isNaN(score)) {
      return "Invalid";
    }
  }

  const updatedScores = scores.map(score => score + 10);
  const totalScore = updatedScores.reduce(
    (total, score) => total + score,
    0
  );

  return totalScore;
}