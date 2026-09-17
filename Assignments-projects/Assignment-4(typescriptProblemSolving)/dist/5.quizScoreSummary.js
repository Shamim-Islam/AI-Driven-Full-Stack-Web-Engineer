"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getQuizSummary = (scores) => {
    const total = scores.reduce((acc, item) => acc + item, 0);
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0,
        };
    }
    const average = total / scores.length;
    return {
        total,
        average,
    };
};
// console.log(getQuizSummary([8, 9, 7, 10]));
// console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
//# sourceMappingURL=5.quizScoreSummary.js.map