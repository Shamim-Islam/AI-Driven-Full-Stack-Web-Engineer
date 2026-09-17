function studentIntroduction(student) {
  if (
    typeof student !== "object" ||
    student === null ||
    Array.isArray(student) ||
    !("name" in student) ||
    !("age" in student) ||
    !("course" in student)
  ) {
    return "Invalid";
  }

  const { name, age, course } = student;

  return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
}

// console.log("=== Test Case 1: Valid Object ===");
// console.log(studentIntroduction({
//   name: "Sadia",
//   age: 22,
//   course: "Python",
//   university: "DU"
// }));

// console.log("\n=== Test Case 2: Name as Number ===");
// console.log(studentIntroduction({
//   name: 123,
//   age: 20,
//   course: "React"
// }));

// console.log("\n=== Test Case 3: Empty String Name ===");
// console.log(studentIntroduction({
//   name: "",
//   age: 25,
//   course: "Node.js"
// }));

// console.log("\n=== Test Case 4: Missing Age ===");
// console.log(studentIntroduction({
//   name: "Karim",
//   course: "MongoDB"
// }));

// console.log("\n=== Test Case 5: Age as String ===");
// console.log(studentIntroduction({
//   name: "Nafisa",
//   age: "21",
//   course: "TypeScript"
// }));

// console.log("\n=== Test Case 6: Null Input ===");
// console.log(studentIntroduction(null));

// console.log("\n=== Test Case 7: Array Input ===");
// console.log(studentIntroduction(["Rafi", 18, "JavaScript"]));

// console.log("\n=== Original Sample Test Cases ===");
// console.log(studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" }));

// console.log(studentIntroduction({}));

console.log(studentIntroduction("student"));

