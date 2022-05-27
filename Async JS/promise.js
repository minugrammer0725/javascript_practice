// Promises
const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch data (either resolve OR reject)
    //resolve("some data");
    reject("some errr");
  });
};

// one callback function per data/error.
// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// simple promise
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// promise using json data.
getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promise 1:", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2: ", data);
    return getTodos("todos/minwoo.json");
  })
  .then((data) => {
    console.log("promise 3: ", data);
  })
  .catch((err) => {
    // will catch any error.
    console.log(err);
  });
