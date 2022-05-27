// Async & Await

// async function always returns a Promise.
const getTodos = async () => {
  const response = await fetch("todos/mario.json");
  if (response.status !== 200) {
    throw new Error("Cannot Fetch Data!");
  }
  const data = await response.json();
  return data;
};

// ironically, have to use .then() once to resolve the promise.
console.log(1);
console.log(2);
getTodos()
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });

console.log(3);
console.log(4);
