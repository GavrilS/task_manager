import { Task, tasks, loadTasks, taskElemIds } from './js_modules/tasks.js'
import { getSavedTasks, persistActiveTasks } from './js_modules/tasks_persistence.js'
import { getTaskParent, focusCardOnClick } from './js_modules/card_functionality.js';

async function loadSavedTasks() {
    let savedTasks = await getSavedTasks();
    console.log('savedTasks: ', savedTasks);
    try {
        savedTasks.forEach((task) => {
            // console.log('task: ', task)
            let { _title, _description, _status } = task;
            tasks.push(new Task(_title, _description, _status));
        });
        // console.log('tasks: ', tasks);
        loadTasks();
    } catch (err) {
        console.log('Saved tasks were not loaded properly...');
    }
}

loadSavedTasks();

const mainComponent = document.querySelector('.main-component');

const createTask = document.querySelector('#create-task');
const newTaskForm = document.getElementById('create-task-modal');
createTask.addEventListener('click', () => {
    mainComponent.style.opacity = 0.5;
    newTaskForm.style.display = 'block';
    console.log(newTaskForm);
})

const saveTasks = document.querySelector('#save-task');

const loadTasksBtn = document.querySelector('#load-task');

const closePopup = document.querySelector('.popup-btn-close');
closePopup.addEventListener('click', () => {
    newTaskForm.style.display = 'none';
    mainComponent.style.opacity = 1;
})

const saveTaskModal = document.querySelector('#create-new-task');
saveTaskModal.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e);
    const taskFormChildren = newTaskForm.children;
    const title = taskFormChildren[0].lastElementChild.value;
    const description = taskFormChildren[1].lastElementChild.value;
    const status = taskFormChildren[2].lastElementChild.value;

    // console.log(title);
    // console.log(description);
    const newTask = new Task(title, description, status);
    // console.log('New task: ', newTask);
    tasks.push(newTask);
    console.log('tasks: ', tasks);
    loadTasks();
    closeModal(newTaskForm);
    persistActiveTasks(tasks);
})

const tasksElement = document.querySelector('.tasks');
tasksElement.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (taskElemIds.includes(e.target.id)) {
        console.log('Element is a task card element: ', e.target);
        const taskCardElement = getTaskParent(e.target);
        console.log('Parent task card element: ', taskCardElement);
        focusCardOnClick(taskCardElement, mainComponent);
    } else {
        console.log('Element is not a task card element: ', e.target);
    }
})


function closeModal(modal) {
    modal.style.display = 'none';
    mainComponent.style.opacity = 1;
}

