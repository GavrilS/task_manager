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

const tasks = [];

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
    const title = document.createTextNode('<h1>' + task.title + '</h1>');
    const description = document.createTextNode('<p>' + task.description + '</p>');
    const status = document.createTextNode('<h3>' + task.status + '</h3>');
    newTaskCard.appendChild(title);
    newTaskCard.appendChild(description);
    newTaskCard.appendChild(status);
    element.appendChild(newTaskCard);
}

export {
    Task,
    tasks,
    loadTasks
};
