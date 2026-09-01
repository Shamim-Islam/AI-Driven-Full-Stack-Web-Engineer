
let value : unknown = "Hello TypeScript";
let myValue = value as string;

const length1 = myValue.length
const length2 = (<string>value).length;

console.log(length1, length2)
