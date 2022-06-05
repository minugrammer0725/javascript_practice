// symbols are UNIQUE!
// No two symbols can be the same.
// Primitive Type

const symbolOne = Symbol("a generic name");
const symbolTwo = Symbol("a generic name");

console.log(symbolOne, typeof symbolOne);
console.log(symbolTwo, typeof symbolTwo);

console.log(symbolOne === symbolTwo);
console.log(symbolOne == symbolTwo);

const ninja = {};
ninja.age = 30;
ninja["belt"] = "purple";

ninja[symbolOne] = "ryu";
ninja[symbolTwo] = "minwoo";

console.log(ninja);
