const todoForm = document.getElementById('todo-form');
const todoTable = document.getElementById('todo-table');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const task = document.getElementById('task').value;
  const priority = document.getElementById('priority').value;
  const category = document.getElementById('category').value;

  // Create a todo object
  const todo = {
    task: task,
    priority: priority,
    category: category,
  };

  // Add todo to local storage
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));

  // Add todo to the table
  addTodoToTable(todo);

  // Clear form fields
  todoForm.reset();
});

function addTodoToTable(todo) {
  const tableBody = document.getElementById('todo-table').getElementsByTagName('tbody')[0];
  const row = document.createElement('tr');

  const taskCell = document.createElement('td');
  taskCell.innerText = todo.task;
  row.appendChild(taskCell);

  const priorityCell = document.createElement('td');
  priorityCell.innerText = todo.priority;
  if (todo.priority === "high") {
    row.classList.add("high");
  } else if (todo.priority === "medium") {
    row.classList.add("medium");
  }
  row.appendChild(priorityCell);

  const categoryCell = document.createElement('td');
  categoryCell.innerText = todo.category;
  row.appendChild(categoryCell);

  // Add a cell for action (e.g., delete button)
  const actionCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener('click', function() {
    // Add functionality to delete the todo from local storage and table on click
    // (code for deletion logic)
  });
  actionCell.appendChild(deleteButton);
  row.appendChild(actionCell);

  tableBody.appendChild(row);
}
