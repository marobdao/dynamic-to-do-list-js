// script.js
// To-Do List Application: Add, display, and remove tasks

document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  /**
   * Creates a new task and appends it to the task list.
   */
  function addTask() {
    // Retrieve and trim input value
    const taskText = taskInput.value.trim();

    // Ensure a task was entered
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item and set its text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for this task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    // Remove the task on button click
    removeBtn.onclick = function() {
      taskList.removeChild(li);
    };

    // Append remove button to list item, then list item to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input for the next task
    taskInput.value = '';
  }

  // Attach event listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  });
});
