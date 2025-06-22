// script.js
// To-Do List Application with Local Storage Persistence

document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Initialize tasks array from localStorage or empty
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  /**
   * Renders a single task in the DOM and sets up its removal.
   * @param {string} taskText - The text of the task to render.
   * @param {boolean} save - Whether to save this task to localStorage.
   */
  function addTask(taskText, save = true) {
    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Remove handler: update DOM and localStorage
    removeBtn.onclick = function() {
      taskList.removeChild(li);
      const index = tasks.indexOf(taskText);
      if (index > -1) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    };

    // Append button and li, then optionally save
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  /**
   * Load all saved tasks from localStorage on startup.
   */
  function loadTasks() {
    tasks.forEach(task => addTask(task, false));
  }

  // Attach event listeners
  addButton.addEventListener('click', function() {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  });

  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addButton.click();
    }
  });

  // Initial load of tasks
  loadTasks();
});
