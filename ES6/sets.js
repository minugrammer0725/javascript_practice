// sets

const namesArray = ["james", "josh", "alan", "james"];
//console.log(namesArray);

const namesSet = new Set(namesArray);
//console.log(namesSet);

const uniqueNames = [...namesSet];
//console.log(uniqueNames);

const ages = new Set();
ages.add(20).add("22");
ages.size;
ages.has("21");
ages.clear();

//console.log(ages);

const ninjas = new Set([
  { name: "mario", age: 32 },
  { name: "bario", age: 22 },
  { name: "wario", age: 46 },
]);
ninjas.forEach((ninja) => {
  //console.log(ninja.name);
});
