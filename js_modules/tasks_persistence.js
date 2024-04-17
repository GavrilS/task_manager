async function getSavedTasks() {
    let tasks = [];
    try {
        const result = await fetch("../artifacts/saved_tasks.json");
        tasks = await result.json();
    } catch (err) {
        console.log('We got an error retrieving saved tasks\n', err);
    }

    return tasks;
}



export {
    getSavedTasks
}
