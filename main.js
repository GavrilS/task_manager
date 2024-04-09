const createTask = document.querySelector('#create-task');
const saveTasks = document.querySelector('#save-task');
const loadTasks = document.querySelector('#load-task');
const closePopup = document.querySelector('.popup-btn-close');

const newTaskForm = document.getElementById('create-task-modal');

createTask.addEventListener('click', () => {
    newTaskForm.style.display = 'block';
    newTaskForm.style.visibility = 'visible';
    console.log(newTaskForm);
})

closePopup.addEventListener('click', () => {
    newTaskForm.style.display = 'none';
})
