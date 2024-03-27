const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const tasksList = document.getElementById('tasks-list');

// Add task to the list
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value.trim() === '') {
        return;
    }
    const task = document.createElement('li');
    task.className = 'task-item';
    task.innerHTML = `
        <span>${taskInput.value.trim()}</span>
        <button class="delete-btn">X</button>
    `;
    tasksList.appendChild(task);
    taskInput.value = '';
    task.addEventListener('click', () => {
        task.classList.toggle('completed');
    });
    task.querySelector('.delete-btn').addEventListener('click', () => {
        tasksList.removeChild(task);
    });
});