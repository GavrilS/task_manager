class Task {
    constructor(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get status() {
        return this._status;
    }

    set title(title) {
        if (title) {
            this._title = title;
        }
    }

    set description(description) {
        if (description) {
            this._description = description;
        }
    }

    set status(status) {
        if (status) {
            this._status = status;
        }
    }
}

let tasks = [];

function loadTasks() {
    const toDoElement = document.querySelector('.todo');
    const inProgressElement = document.querySelector('.in-progress');
    const reviewElement = document.querySelector('.review');
    const doneElement = document.querySelector('.done');

    tasks.forEach((task) => {
        if (task.status.toLowerCase() === 'in-progress') {
            addTaskToElement(inProgressElement, task);
        } else if (task.status.toLowerCase() === 'review') {
            addTaskToElement(reviewElement, task);
        } else if (task.status.toLowerCase() === 'done') {
            addTaskToElement(doneElement, task);
        } else {
            addTaskToElement(toDoElement, task);
        }
    });
}

function addTaskToElement(element, task) {
    const newTaskCard = document.createElement('div');
    newTaskCard.classList.add('.ag-courses_item');

    const link = document.createElement('a');
    link.href = '#';
    link.classList.add('.ag-courses-item_link');
    newTaskCard.appendChild(link);

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('.ag-courses-item_bg');
    link.appendChild(itemContainer);

    const titleElement = document.createElement('h1');
    const title = document.createTextNode(task.title);
    titleElement.appendChild(title);
    titleElement.classList.add('.ag-courses-item_title');
    itemContainer.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    const description = document.createTextNode(task.description);
    descriptionElement.appendChild(description);
    descriptionElement.classList.add('.ag-courses-item_body-box');
    itemContainer.appendChild(descriptionElement);

    const statusElement = document.createElement('h3');
    const status = document.createTextNode(task.status);
    statusElement.appendChild(status);
    statusElement.classList.add('.ag-courses-item_body-box');
    itemContainer.appendChild(statusElement);

    element.appendChild(newTaskCard);
    console.log(element);
}

export {
    Task,
    tasks,
    loadTasks
};
