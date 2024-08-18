// ----- Basic Types -----
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// ----- Any -----
let level: any;
level = 1;
level = "a";

function render(document: any) {
  console.log(document);
}

// ----- Arrays -----
let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => n.toFixed());

// ----- Tuples -----
// e.g. id: 1, name: Mosh
let user: [number, string] = [1, "Mosh"];

// ----- Enums -----
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// ----- Functions -----
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);

// -- optional parameter --
// function calculate(income?: number): number {}

// -- tsconfig.json --
// "noUnusedParameters": true
// "noImplicitReturns": true
// "noUnusedLocals": true
