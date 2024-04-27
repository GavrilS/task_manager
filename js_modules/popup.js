function togglePopups(target) {
    const popups = [...document.getElementsByClassName('popup')];
    const popup = target.closest('.popup');
    const clickedOnClosedPopup = popup && !popup.classList.contains('show');

    popups.forEach(p => p.classList.remove('show'));

    if (clickedOnClosedPopup) popup.classList.add('show');
}

export default togglePopups;
