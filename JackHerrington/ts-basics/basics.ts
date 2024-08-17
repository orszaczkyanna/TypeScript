let userName: string = "Jack Herrington";
let hasLoggedIn: boolean = true;
let myNumber: number = 10;

// hasLoggedIn += " Herrington";

console.log(hasLoggedIn);

let myRegex: RegExp = /foo/;

// ---- Arrays ----
const names: string[] = userName.split(" ");
const nameValues: string[] = ["Jack", "Herrington"];

const myValues: Array<number> = [1, 2, 3, 4, 5, 6];

// ---- Objects ----
// basic
const myPerson: {
  first: string;
  last: string;
} = {
  first: "Jack",
  last: "Herrington",
};

// interface
interface Person {
  first: string;
  last: string;
}

const otherPerson: Person = {
  first: "Someone",
  last: "Else",
};

// ---- Records (Maps) ----
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

// ---- Conditionals (same as JS) ----
if (ids[30] === "d") {
  console.log("It's d");
}

// ---- Loops (same as JS) ----
// You can specify but don't have to.
for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v: number) => console.log(v));

const out: number[] = [4, 5, 6].map((v: number) => v * 10);
const outSt: string[] = [4, 5, 6].map((v: number) => `${v * 10}`);
