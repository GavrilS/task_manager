function getTaskParent(element) {
    if (element.id === 'card-parent') {
        return element;
    } else {
        return getTaskParent(element.parentElement);
    }
}


function focusCardOnClick(cardElem, mainComponent) {
    mainComponent.style.opacity = 0.5;
    cardElem.classList.add('focus-card');
}



export {
    getTaskParent,
    focusCardOnClick
};
