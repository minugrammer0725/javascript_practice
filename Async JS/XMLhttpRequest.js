// HTTP Requests
/*
Make HTTP Requests to get data from external resources.
Using API endpoints.
*/
// JS Builtin

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Could not fetch Data...", undefined);
    }
  });

  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  request.open("GET", resource);
  request.send();
};

getTodos("todos/luigi.json", (err, data) => {
  console.log(data);
  getTodos("todos/mario.json", (err, data) => {
    console.log(data);
  });
});
