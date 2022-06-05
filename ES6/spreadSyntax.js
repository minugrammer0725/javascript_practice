// rest parameter
const double = (...nums) => {
  return nums.map((num) => num * 2);
};

// [ 1, 3, 4, 5, 7] => [2, 6, 8, 10, 14]
//console.log(double(1, 3, 4, 5, 7));

// spread syntax (arrays)
const people = ["minwoo", "ryu", "josh"];
const members = ["mario", "luigi", ...people];
//console.log(members);

// spread syntax (objects)
const person = {
  name: "minwoo",
  age: 26,
  job: "steve",
};

// reference (not a copy)
const ref = person;

// correct copy
const copy = { ...person };
