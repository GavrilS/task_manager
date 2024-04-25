function getTaskParent(element) {
    if (element.id === 'card-parent') {
        return element;
    } else {
        return getTaskParent(element.parentElement);
    }
}


function focusCardOnClick(cardElem, mainComponent) {
    mainComponent.style.opacity = 0.5;
    cardElem.classList.add('card-focus');
    // cardElem.style.opacity = 1;
}


function removeCardFocus(mainComponent) {
    const focusCard = document.querySelector('card-focus');
    if (focusCard) {
        focusCard.classList.remove('card-focus');
        mainComponent.style.opacity = 1;
    }
}


export {
    getTaskParent,
    focusCardOnClick,
    removeCardFocus
};
