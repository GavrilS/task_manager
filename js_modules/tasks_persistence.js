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


async function persistActiveTasks(tasks) {
    // const options = {
    //     startIn: 'downloads',
    //     suggestedName: 'saved_tasks.json'
    // }
    // const newHandle = await window.showSaveFilePicker(options);
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();

    await writableStream.write(JSON.stringify(tasks));

    await writableStream.close();
}


export {
    getSavedTasks,
    persistActiveTasks
}
