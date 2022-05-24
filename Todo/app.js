const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchTodos = document.querySelector(".search input");

const addTodo = (todo) => {
  // generate HTML template.
  const template = `
        <li
          class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
  `;

  list.innerHTML += template;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    addTodo(todo);
  }

  addForm.reset();
});

// delete todos
list.addEventListener("click", (e) => {
  // event delegation
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((child) => !child.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((child) => child.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// keyup event
let debounceTimer;

const debounce = (callback, time, term) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    callback(term);
  }, time);
};

searchTodos.addEventListener("keyup", (e) => {
  const term = searchTodos.value.trim().toLowerCase();
  // console.log(term);
  debounce(filterTodos, 500, term);
});
