const mainComponent = document.querySelector('.main-component');
const createTask = document.querySelector('#create-task');
const saveTasks = document.querySelector('#save-task');
const loadTasks = document.querySelector('#load-task');
const closePopup = document.querySelector('.popup-btn-close');

const newTaskForm = document.getElementById('create-task-modal');

createTask.addEventListener('click', () => {
    mainComponent.style.opacity = 0.5;
    newTaskForm.style.display = 'block';
    console.log(newTaskForm);
})

closePopup.addEventListener('click', () => {
    newTaskForm.style.display = 'none';
    mainComponent.style.opacity = 1;
})
