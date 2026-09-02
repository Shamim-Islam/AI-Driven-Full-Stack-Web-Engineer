"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processTransaction = (balance, transaction) => {
    if (transaction.type === "deposit") {
        return balance + transaction.amount;
    }
    if (transaction.type === "withdraw") {
        if (transaction.amount < balance) {
            ("Insufficient balance");
        }
    }
    return balance - transaction.amount;
};
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
//# sourceMappingURL=8.bankTransactionProcessor.js.map