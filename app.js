const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// const choiceStore = document.getElementsByName("choice");
// console.log(choiceStore);

const generateTemplate = (todo) => {
  const html = `<li
  class="list-group-item d-flex justify-content-between align-items-center filtered"
>
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // chaining methods
  const todo = addForm.add.value.trim();
  // console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// function for keyup event
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
