"use strict";
var _a;
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
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function renderDocument(document) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
}
function processEvents() {
    while (true) {
    }
}
function reject(message) {
    throw new Error(message);
}
//# sourceMappingURL=advanced-types.js.map