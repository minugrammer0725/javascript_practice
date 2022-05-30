const list = document.querySelector("ul");
const form = document.querySelector("form");
const unsubBtn = document.querySelector("button");

const addRecipe = (recipe, id) => {
  let html = `
    <li data-id=${id}>
      <div>
        ${recipe.name}
      </div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;

  list.innerHTML += html;
};

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

// get documents
// ->
// set up REALTIME listener.
const unsub = db.collection("recipes").onSnapshot((snapshot) => {
  // everytime a firestore changes, it takes a snapshot.
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

// add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();

  const recipe = {
    name: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added successfully!");
    })
    .catch((err) => console.log(err));

  form.reset();
});

// delete documents
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipe deleted!");
      });
  }
});

// unsubscribe from db changes
unsubBtn.addEventListener("click", () => {
  unsub();
  console.log("unsubscribed!");
});
