// scope detective

function describeDeclaration(input) {
  if (input !== "var" && input !== "let" && input !== "const") {
    return "Invalid";
  }

  if ("var" === input) {
    return "Can redeclare, can reassign";
  } else if ("let" === input) {
    return "Cannot redeclare, can reassign";
  } else {
    return "Cannot redeclare, cannot reassign";
  }
}

console.log(describeDeclaration("const"));
