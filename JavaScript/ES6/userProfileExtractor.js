// user profile extractor

let extractUserInfo = (userObj) => {
  //validation
  if (!userObj.user || !userObj.user.name) {
    return "Invalid";
  }

  const {
    user: { name: userName = "Unknown", age: userAge = 0 },
    hobbies,
  } = userObj;
  const [firstHobby = "nothing yet"] = hobbies;
  return `${userName} (${userAge}) likes ${firstHobby}`;
};

// test case
console.log(
  extractUserInfo({
    user: { name: "Sadia", age: 22 },
    hobbies: ["reading", "coding"],
  }),
);

console.log(extractUserInfo({ user: { name: "Rafi", age: 19 }, hobbies: [] }));
console.log(extractUserInfo({ user: { age: 30 }, hobbies: [] }));
