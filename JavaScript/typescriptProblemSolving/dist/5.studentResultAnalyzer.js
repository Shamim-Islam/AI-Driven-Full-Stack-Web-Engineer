"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const studentMarks = student.marks;
    const totalMarks = studentMarks.reduce((acc, item) => acc + item, 0);
    const average = totalMarks / studentMarks.length;
    const result = average >= 40 ? "Passed" : "Failed";
    return {
        name: student.name,
        average,
        result,
    };
};
// console.log(
//   getStudentResult({
//     name: "Rafi",
//     marks: [80, 75, 90, 85],
//   }),
// );
console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25],
}));
//# sourceMappingURL=5.studentResultAnalyzer.js.map