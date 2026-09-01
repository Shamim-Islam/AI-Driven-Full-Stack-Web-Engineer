type Student = {
  name: string;
  marks: number[];
};

type Result = {
  name: string;
  average: number;
  result: string;
};

const getStudentResult = (student: Student): Result => {
  const studentMarks: number[] = student.marks;
  const totalMarks: number = studentMarks.reduce(
    (acc: number, item: number) => acc + item,
    0,
  );
  const average: number = totalMarks / studentMarks.length;
  const result: string = average >= 40 ? "Passed" : "Failed";

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
console.log(
  getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25],
  }),
);
