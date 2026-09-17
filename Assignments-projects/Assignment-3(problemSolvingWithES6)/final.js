//Problem-01: Student Introduction Generator
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

//Problem-02: Active User Filter
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

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const hashtags = caption
    .split(" ")
    .filter((word) => word.startsWith("#") && word.length > 1);

  const longestTag = hashtags.reduce((longest, tag) => {
    const current = tag.slice(1);

    return current.length > longest.length ? current : longest;
  }, "");

  return {
    hashtagCount: hashtags.length,
    longestTag,
  };
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  for (const score of scores) {
    if (typeof score !== "number" || Number.isNaN(score)) {
      return "Invalid";
    }
  }

  const updatedScores = scores.map((score) => score + 10);
  const totalScore = updatedScores.reduce((total, score) => total + score, 0);

  return totalScore;
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
function generateLeaderboard(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return "Invalid";
  }

  for (const student of students) {
    if (
      typeof student !== "object" ||
      student === null ||
      !("name" in student) ||
      !("score" in student) ||
      typeof student.score !== "number" ||
      Number.isNaN(student.score)
    ) {
      return "Invalid";
    }
  }

  const qualified = students.filter((student) => student.score >= 70);

  const names = qualified.map((student) => student.name.toUpperCase());

  return names.slice(0, 3);
}
