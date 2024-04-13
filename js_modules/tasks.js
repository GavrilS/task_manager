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

export {
    Task,
    tasks
};
