// storing objects in local storage...
const todos = [
  { text: "play mariokart", author: "mario" },
  { text: "play with mario", author: "luigi" },
  { text: "play brawl with minky", author: "minwoo" },
];

// JSON string
const jsonTodos = JSON.stringify(todos);

localStorage.setItem("todos", jsonTodos);

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));
