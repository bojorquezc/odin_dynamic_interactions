const expandMenuItem = document.querySelector('.expand_menu');
expandMenuItem.addEventListener('click', expandAndContractMenu);

function expandAndContractMenu() {
    const menuItem = document.querySelectorAll('.expand_menu_item');
    if (expandMenuItem.textContent === 'Expand Menu') {
        expandMenuItem.textContent = 'Contract Menu';
        menuItem.forEach((item) => {
            item.style.display = 'block';
        })
    } else {
        expandMenuItem.textContent = 'Expand Menu';
        menuItem.forEach((item) => {
            item.style.display = 'none';
        })
    }
    updateOddBackground();
}

function updateOddBackground() {
    const menuItem = document.querySelectorAll('.expand_menu_item');
    const array = Array.from(menuItem);
    array.forEach((item) => {
        if (array.indexOf(item) % 2 === 0) {
            item.style.backgroundColor = '#fc9d00';
            console.log(array.indexOf(item));
        }
    })
}

// test commit