// LOCAL STORAGE

// store data
// setItem()
localStorage.setItem("name", "mario");
localStorage.setItem("age", 50);

// get data
// getItem()
let name = localStorage.getItem("name");

// updating data
// reusing the setItem()
// or
// .attribute notation.
localStorage.setItem("name", "luigi");
localStorage.age = 30;

// delete items
localStorage.removeItem("name");

// remove ALL items
localStorage.clear();
