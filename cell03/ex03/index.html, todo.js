ex03/
├── index.html
└── todo.js

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>To do or not to do</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      padding: 20px;
      text-align: center;
    }

    #new-btn {
      padding: 10px 20px;
      font-size: 16px;
      margin-bottom: 20px;
      cursor: pointer;
    }

    #ft_list {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .todo {
      background: #ffffff;
      border: 1px solid #ccc;
      padding: 10px 20px;
      margin: 5px 0;
      width: 300px;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>

  <button id="new-btn">New</button>
  <div id="ft_list"></div>

  <script src="todo.js"></script>
</body>
</html>

// Get reference to ft_list and button
const ft_list = document.getElementById("ft_list");
const newBtn = document.getElementById("new-btn");

// Cookie functions
function saveTodos() {
  const todos = [];
  ft_list.querySelectorAll(".todo").forEach(todo => {
    todos.push(todo.innerText);
  });
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
  const cookie = document.cookie
    .split("; ")
    .find(row => row.startsWith("todos="));
  if (cookie) {
    try {
      const data = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
      data.forEach(text => addTodo(text));
    } catch (e) {
      console.error("Failed to load todos from cookie:", e);
    }
  }
}

// Add a new TODO to the DOM
function addTodo(text) {
  const todo = document.createElement("div");
  todo.className = "todo";
  todo.innerText = text;

  // Click to delete
  todo.addEventListener("click", () => {
    if (confirm("Do you want to delete this TODO?")) {
      ft_list.removeChild(todo);
      saveTodos(); // Update cookies
    }
  });

  ft_list.appendChild(todo);
  saveTodos(); // Save after adding
}

// Prompt on "New" button click
newBtn.addEventListener("click", () => {
  const text = prompt("Enter a new TODO:");
  if (text && text.trim() !== "") {
    addTodo(text.trim());
  }
});

// Load any saved TODOs from cookie
window.addEventListener("load", loadTodos);

