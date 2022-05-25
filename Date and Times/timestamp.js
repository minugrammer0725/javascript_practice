// timestamps

const before = new Date("February 1 2019 7:30:59");
const now = new Date();

console.log(before);
console.log(now);

console.log(before.getTime());
console.log(now.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const days = Math.round(diff / 1000 / 3600 / 24);
console.log(days);

// convert timestamp into date object
const timestamp = 197284039183;
console.log(new Date(timestamp));
