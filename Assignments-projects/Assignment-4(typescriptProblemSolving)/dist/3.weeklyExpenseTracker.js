"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklyTotal = (expenses) => {
    const total = expenses.reduce((acc, item) => acc + item, 0);
    return total;
};
// console.log(calculateWeeklyTotal([200, 450, 100]));
// console.log(calculateWeeklyTotal([1000, 250]));
console.log(calculateWeeklyTotal([]));
//# sourceMappingURL=3.weeklyExpenseTracker.js.map