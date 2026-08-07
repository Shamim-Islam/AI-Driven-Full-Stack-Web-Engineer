// Inventory Object manager

const manageInventoryObject = (obj, action) => {
  // validation
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "Invalid";
  }

  if (action === "keys") {
    return Object.keys(obj);
  } else if (action === "values") {
    return Object.values(obj);
  } else if (action === "entries") {
    return Object.entries(obj);
  } else if (action.startWith("delete:")) {
    const property = action.split(":")[1];
    const newObj = { ...obj };
    delete newObj[property];
    return newObj;
  }
  // seal
  if (action === "seal") {
    Object.seal(obj);
    return obj;
  }

  // freeze
  if (action === "freeze") {
    Object.freeze(obj);
    return obj;
  }
};

// test case
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "keys"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "delete:c"));
// console.log(manageInventoryObject({ a: 1 }, "shrink"));
