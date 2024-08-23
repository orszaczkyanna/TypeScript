import addNumbers, {
  addStrings,
  format,
  introduce,
  getName,
} from "./functions";

console.log(addNumbers(1, 2));

console.log(addStrings("a", "b"));
console.log(addStrings("c"));

console.log(format("Title", 6));

console.log(introduce("Hey", "John", "Bob", "July"));

console.log(getName({ first: "John", last: "Smith" }));
