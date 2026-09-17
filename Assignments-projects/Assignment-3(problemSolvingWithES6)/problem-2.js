function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  for (const user of users) {
    if (typeof user !== "object" || user === null || !("isActive" in user)) {
      return "Invalid";
    }
  }

  return users.filter(({ isActive }) => isActive === true);
}

// console.log(filterActiveUsers('users'));
// console.log(filterActiveUsers([]));
// console.log(filterActiveUsers(null));
// console.log(filterActiveUsers(undefined));
// console.log(filterActiveUsers({}));
// console.log(filterActiveUsers([{}]));
// console.log(filterActiveUsers([{ name: "A" }]));
// console.log(filterActiveUsers([{ name: "A", isActive: true }]));
// console.log(filterActiveUsers([
//   { name: "A", isActive: false },
//   { name: "B", isActive: true }
// ]));

// console.log(filterActiveUsers([
//   { name: "A", isActive: false },
//   { name: "B", isActive: false }
// ]));
