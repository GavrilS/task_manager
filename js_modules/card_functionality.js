function getTaskParent(element) {
    if (element.id === 'card-parent') {
        return element;
    } else {
        return getTaskParent(element.parentElement);
    }
}

function getCardTask(element) {
    if (element.id === 'card-container') {
        const task = {};
        for (const child of element.children) {
            console.log(child);
            task[child.id] = child.innerHTML;
        }
        console.log('task: ', task);
        return task;
    }
    return getCardTask(element.firstChild);
}


function focusCardOnClick(cardElem, mainComponent) {
    mainComponent.style.opacity = 0.5;
    const cardTask = getCardTask(cardElem);
    const cardPopup = document.querySelector('#card-popup');
    for (const child of cardPopup.children) {
        child.innerHTML = cardTask[child.id];
    }
    cardPopup.style.display = 'block';
}


function removeCardFocus(mainComponent) {
    // const focusCard = document.querySelector('card-focus');
    const cardPopup = document.querySelector('#card-popup')
    if (cardPopup) {
        // focusCard.classList.remove('card-focus');
        cardPopup.style.display = 'none';
        mainComponent.style.opacity = 1;
    }
}


export {
    getTaskParent,
    focusCardOnClick,
    removeCardFocus
};
