"use strict";

// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const toolbarOptions = document.querySelector("#toolbar");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterSelect = document.querySelector("#filter-select");

let oldInputValue;

// Funcões
const saveTodo = (text, done = 0, save = 1) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.innerHTML = `
        <h3>${text}</h3>
        <button class="finish-todo">
            <i class="fa-solid fa-check"></i>
        </button>
        <button class="edit-todo">
            <i class="fa-solid fa-pen"></i>
        </button>
        <button class="remove-todo">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

  // Utilizando dados da localStorage
  if (done) {
    todo.classList.add("done");
  }
  if (save) {
    saveTodoLocalStorage({ text, done });
  }

  todoList.appendChild(todo);
  todoInput.value = "";
  todoInput.focus();
};

const toggleForms = () => {
  todoForm.classList.toggle("hide");
  editForm.classList.toggle("hide");
  toolbarOptions.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const updateTodo = (editInputValue) => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if (todoTitle.textContent == oldInputValue) {
      todoTitle.textContent = editInputValue;
      // Utilizando dados da localStorage
      updateTodoLocalStorage(oldInputValue, editInputValue);
    }
  });
};

const searchTodos = (search) => {
  let normalizedSearch = search;
  if (search) {
    normalizedSearch = normalizedSearch.toLowerCase();
  }

  const todos = document.querySelectorAll(".todo");
  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3").textContent.toLowerCase();

    todo.classList.remove("hide");

    if (!todoTitle.includes(normalizedSearch)) {
      todo.classList.add("hide");
    }
  });
};

const filterTodos = (filterValue) => {
  const todos = document.querySelectorAll(".todo");

  switch (filterValue) {
    case "all":
      todos.forEach((todo) => (todo.style.display = "flex"));
      break;
    case "done":
      todos.forEach((todo) =>
        todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none"),
      );
      break;
    case "todo":
      todos.forEach((todo) =>
        !todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none"),
      );
      break;
    default:
      break;
  }
};

// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = todoInput.value?.trim();
  if (!todoText) return;

  saveTodo(todoText);
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.parentElement;

  let todoTitle;
  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").textContent;
  }

  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
    // Utilizando dados da localStorage
    updateStatusTodoLocalStorage(todoTitle);
  } else if (targetEl.classList.contains("edit-todo")) {
    toggleForms();
    editInput.focus();
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  } else if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
    // Utilizando dados da localStorage
    removeTodoLocalStorage(todoTitle);
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value?.trim();
  if (!editInputValue) return;

  updateTodo(editInputValue);

  toggleForms();
});

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value?.trim();

  searchTodos(search);
});

eraseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  searchInput.value = "";
  searchInput.dispatchEvent(new Event("keyup"));
});

filterSelect.addEventListener("change", (e) => {
  const filterValue = e.target.value;
  filterTodos(filterValue);
});

// Local Storage
const getFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  return todos;
};

const saveToLocalStorage = (data) => {
  localStorage.setItem("todos", JSON.stringify(data));
};

const loadTodos = () => {
  const todos = getFromLocalStorage();

  todos.forEach((todo) => {
    saveTodo(todo.text, todo.done, 0);
  });
};

const saveTodoLocalStorage = (todo) => {
  const todos = getFromLocalStorage();

  todos.push(todo);

  saveToLocalStorage(todos);
};

const removeTodoLocalStorage = (todoTitle) => {
  const todos = getFromLocalStorage();

  const filteredTodos = todos.filter((todo) => todo.text !== todoTitle);

  saveToLocalStorage(filterTodos);
};

const updateStatusTodoLocalStorage = (todoTitle) => {
  const todos = getFromLocalStorage();

  todos.map((todo) =>
    todo.text === todoTitle ? (todo.done = !todo.done) : null,
  );

  saveToLocalStorage(todos);
};

const updateTodoLocalStorage = (todoOldTitle, todoNewTitle) => {
  const todos = getFromLocalStorage();

  todos.map((todo) =>
    todo.text === todoOldTitle ? (todo.text = todoNewTitle) : null,
  );

  saveToLocalStorage(todos);
};

// Inicializar
loadTodos();
