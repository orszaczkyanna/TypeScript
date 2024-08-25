// Function Parameters
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// // Function Params with Params
// export function mutateArray(
//   numbers: number[],
//   mutate: (v: number) => number
// ): number[] {
//   return numbers.map(mutate);
// }
// console.log(mutateArray([1, 2, 3], (v) => v * 10));

// Function as Types
export type MutationFunction = (v: number) => number;

export function mutateArray(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutationFunction: MutationFunction = (v: number) => v * 100;

console.log(mutateArray([1, 2, 3], (v) => v * 10));

// Returning Functions
export type AdderFunction = (val: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
