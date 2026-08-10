function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const hashtags = caption
    .split(" ")
    .filter(word => word.startsWith("#") && word.length > 1);

  const longestTag = hashtags.reduce((longest, tag) => {
    const current = tag.slice(1);

    return current.length > longest.length ? current : longest;
  }, "");

  return {
    hashtagCount: hashtags.length,
    longestTag
  };
}

// console.log(countHashtags("Loving this weather #sunny #vibes #weekend"));
// console.log(countHashtags("No hashtags here"));
// console.log(countHashtags("#ai #ml data science"));
// console.log(countHashtags("#ai #ml data science"));
// console.log(countHashtags(123));
console.log(countHashtags(['#fun']));