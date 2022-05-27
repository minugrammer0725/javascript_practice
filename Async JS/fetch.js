// fetch api

// returns a Promise.
// ONLY rejects upon network error.
const promise = fetch("todos/mario.json")
  .then((response) => {
    // response.json() returns a Promise!!
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
