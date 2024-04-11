const mainComponent = document.querySelector('.main-component');
const createTask = document.querySelector('#create-task');
const saveTasks = document.querySelector('#save-task');
const loadTasks = document.querySelector('#load-task');
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
})
