const list = document.querySelector(".list");
const input = document.querySelector("input");

let todoList = [];
let todoInputValue = "";
let counter = 0

function onInputChange(event) {
  todoInputValue = event.target.value;
}

function addTodo() {
  if (!todoInputValue) {
    return;
  }
  const task = {
    id: counter++,
    task: todoInputValue,
  };
  todoList.push(task);
  renderTodo();
  input.value = "";
  todoInputValue = "";
}

function deleteTodo(id) {
  todoList = todoList.filter((todo) => {
    return todo.id !== id;
  });
  renderTodo();
}

function renderTodo() {
  list.innerHTML = todoList
    .map(
      (element) =>
        ` <li>
    ${element.task}
    <button class="todo__delete" onclick="deleteTodo(${element.id})">
      x
    </button>
  </li> `
    )
    .join("");
}

renderTodo();
