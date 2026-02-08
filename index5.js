function loadTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}

function displayTodos(toDos) {
  const toDoos = document.getElementById("main-container");
  for (const toodos of toDos) {
    const div = document.createElement("div");
    div.classList.add("todo-box");
    div.innerHTML = `
    <h1>user :${toodos.id}</h1>
    <h4>description: ${toodos.title}</h4>
    `;
    toDoos.appendChild(div);
  }
}
