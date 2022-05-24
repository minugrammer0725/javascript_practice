// Array Filter Method--------------------------------------------------
const scores = [10, 30, 15, 25, 50, 40, 5];

const newScores = scores.filter((score) => {
  // either return true/false
  return score > 20;
});

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);

// Array Map Method--------------------------------------------------
premiumUsers.map((user) => {
  console.log(user.name);
});

const prices = [20, 10, 40, 25, 80];
const newPrices = prices.map((price) => price * 0.5);
console.log(newPrices);

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shell", price: 50 },
];

const newProducts = products.map((product) => {
  if (product.price > 30) {
    // create a new object to prevent altering the original array.
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(newProducts);

// Array Reduce Method--------------------------------------------------
const myScores = [10, 20, 60, 40, 50, 90];
const passCount = myScores.reduce((count, score) => {
  if (score > 50) {
    count++;
  }
  // return the accumulator for the next iteration.
  return count;
}, 0);

console.log(`Passing Student Count: ${passCount}`);

const reduceScores = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
];

const marioScores = reduceScores.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(marioScores);

// Array Find Method--------------------------------------------------
// returns the value of the first element that matches inside of an array
const findScores = [10, 5, 23, 48, 34, 60, 51];
const firstPassValue = findScores.find((score) => {
  return score > 50;
});

console.log(firstPassValue);

// Array Sort Method--------------------------------------------------\
// .sort() is destructive. It changes the original Array!!
const unsortedNames = ["jessica", "candie", "django", "shaun", "alexander"];
unsortedNames.sort();
// sort will sort elements in alphabetical order, not numerically.

const unsortedPlayers = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "luigi", score: 70 },
  { player: "crystal", score: 60 },
  { player: "kodak", score: 20 },
];

// a and b represent two consecutive elements.

// if a should come first, return -1
// if b should come first, return 1
// if no reordering needed, return 0
unsortedPlayers.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (b.score > a.score) {
    return 1;
  } else {
    return 0;
  }
});

// shorter version of above
unsortedPlayers.sort((a, b) => {
  return b.score - a.score;
});

console.log(unsortedPlayers);

// Chain Array Methods---------------------------------------------
const myProducts = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shell", price: 50 },
];

// 1) filter products that are over 20 in price.
// 2) map it to new array.

// const filteredMyProducts = myProducts.filter((product) => product.price > 20);
// const promos = filteredMyProducts.map((product) => {
//   return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = myProducts
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
