"use strict";
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(`number version: ${kgToLbs(10)}`);
console.log(`string version: ${kgToLbs("10kg")}`);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity1 = 50;
let quantity2 = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
//# sourceMappingURL=advanced-types.js.map