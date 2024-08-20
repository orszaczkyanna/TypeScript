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
