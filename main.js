import { Task, tasks, loadTasks } from './js_modules/tasks.js'
import { getSavedTasks } from './js_modules/tasks_persistence.js'

const mainComponent = document.querySelector('.main-component');
const createTask = document.querySelector('#create-task');
const saveTasks = document.querySelector('#save-task');
const loadTasksBtn = document.querySelector('#load-task');
const closePopup = document.querySelector('.popup-btn-close');
const saveTaskModal = document.querySelector('#create-new-task');

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

saveTaskModal.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e);
    const taskFormChildren = newTaskForm.children;
    const title = taskFormChildren[0].lastElementChild.value;
    const description = taskFormChildren[1].lastElementChild.value;
    const status = taskFormChildren[2].lastElementChild.value;

    console.log(title);
    console.log(description);
    const newTask = new Task(title, description, status);
    console.log('New task: ', newTask);
    tasks.push(newTask);
    console.log('tasks: ', tasks);
    loadTasks();
    closeModal(newTaskForm);
})


function closeModal(modal) {
    modal.style.display = 'none';
    mainComponent.style.opacity = 1;
}

const currentTasks = getSavedTasks();
currentTasks.forEach((task) => {
    console.log(task);
})
