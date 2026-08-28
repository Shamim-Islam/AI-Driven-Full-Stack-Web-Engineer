/*
  Problem 2: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/

let getPassingStudents = (students, threshold) => {
  let filteredStudents = students.filter((student) => {
    return student.marks >= threshold;
  });
  return filteredStudents;
};

let students = [
  { name: "Rafi", marks: 75 },
  { name: "Karim", marks: 40 },
  { name: "Utsho", marks: 60 },
  { name: "nadia", marks: 59 },
];
let threshold = 50;

console.log(getPassingStudents(students, threshold));
