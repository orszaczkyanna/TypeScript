// ----- Type Aliases -----
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// ----- Union Types ----- |
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(`number version: ${kgToLbs(10)}`);
console.log(`string version: ${kgToLbs("10kg")}`);

// ----- Intersection Types ----- &
// let weight: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ----- Literal Types -----
let quantity1: 50 | 100 = 50;

type Quantity = 50 | 100;
let quantity2: Quantity = 100;

type Metric = "cm" | "inch";

// ----- Nullable Types -----
function greet(name: string | null | undefined): void {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

// ----- Optional Chaining -----
type Customer = {
  birthday?: Date; // optional
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);

// -- if statement --
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday);
// }

// -- Optional property access operator --
// console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());

// -- Optional element access operator --
// useful for arrays
// customers?.[0]

// -- Optional call --
// let log: any = (message: string) => console.log(message);
let log: any = null;
// log("a"); // crash
log?.("a");

// ----- The Nullish Coaelscing Operator -----
let speed: number | null = null;
let ride = {
  // Falsy values in JS: undefined, null, "", false,  0
  // speed: speed || 30, // can cause problems
  // speed: speed !== null && speed !== undefined ? speed : 30, // more accurate way
  speed: speed ?? 30, // TypeScript version: Nullish coaelscing operator (check for null or undefined)
};

// ----- Type Assertions -----
// let phone = document.getElementById("phone") as HTMLInputElement;
// HTMLElement
// HTMLInputElement
// phone.value;

// ----- The unknown Type -----
function renderDocument(document: unknown) {
  // Narrowing
  // primitive types
  if (typeof document === "string") {
    document.toUpperCase();
  }
  // // custom types
  // if (document instanceof WordDocument) {
  //   document.move();
  // }
}

// ----- The never Type -----
function processEvents(): never {
  while (true) {
    // Infinite Loop
  }
}

function reject(message: string): never {
  throw new Error(message);
}

// processEvents(); // This function never returns
// reject("..."); // Never returns, always throws an error
// console.log("Hello"); // This line will never get executed
