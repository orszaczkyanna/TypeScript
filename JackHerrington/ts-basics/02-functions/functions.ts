function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

// Default Values
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// Union Types
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// Void Functions
export const printFormat = (title: string, param: string | number): void =>
  console.log(format(title, param));

// Promise Functions
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// Rest Parameters
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(", ")}!`;
}

// Type Checking
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}

// Optional Chaining [?.]
// user?. makes sure that user is defined before we use it, if not we get "undefined"

// Nullish Coaelscing Operator [??]
// if undefined or null use the other side of the expression
