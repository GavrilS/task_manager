async function retrieveSavedTasks() {
    try {
        const result = await fetch("../artifacts/saved_tasks.json");
        const tasks = await result.json();
        return tasks;
    } catch (err) {
        console.log('We got an error retrieving saved tasks\n', err);
        return [];
    }
}

async function getSavedTasks() {
    const tasks = await retrieveSavedTasks();
    return tasks;
}


export {
    getSavedTasks
}
