// General functions to expand / contract / style
function expandAndContractMenu(trigger, menuItems) {
    if (trigger.textContent === 'Expand Menu') {
        trigger.textContent = 'Contract Menu';
        menuItems.forEach((item) => {
            item.style.display = 'block';
        })
    } else {
        trigger.textContent = 'Expand Menu';
        menuItems.forEach((item) => {
            item.style.display = 'none';
        })
    }
}

function updateOddBackground(nodeListToStyle) {
    const array = Array.from(nodeListToStyle);
    array.forEach((item) => {
        if (array.indexOf(item) % 2 === 0) {
            item.style.backgroundColor = '#fc9d00';
        }
    })
}

// Desktop navigation interactions
const desktopMenu = {
    trigger: document.querySelector('.expand_menu'),
    items: document.querySelectorAll('.expand_menu_item'),
}
desktopMenu.trigger.addEventListener('click', expandContractDesktop);

function expandContractDesktop() {
    expandAndContractMenu(desktopMenu.trigger, desktopMenu.items);
    updateOddBackground(desktopMenu.items);
}

// Mobile navigation interactions
const mobileMenu = {
    burgerIcon: document.querySelector('.burger_icon'),
    trigger: document.querySelector('.expand_menu_mobile'),
    items: document.querySelectorAll('.expand_menu_item_mobile'),
    mainNavigation: document.querySelector('.main_navigation_mobile'),
}
mobileMenu.burgerIcon.addEventListener('click', displayMobileMenu);
mobileMenu.trigger.addEventListener('click', expandContractMobile);
mobileMenu.mainNavigation.style.display = 'none';

function displayMobileMenu () {
    if (mobileMenu.mainNavigation.style.display === 'none') {
        console.log('Houston this is a test');
        mobileMenu.mainNavigation.style.display = 'block';
    } else {
        mobileMenu.mainNavigation.style.display = 'none';
    }
}

function expandContractMobile() {
    expandAndContractMenu(mobileMenu.trigger, mobileMenu.items);
    updateOddBackground(mobileMenu.items);
    mobileMenuSpacing();
}

function mobileMenuSpacing() {
    if (mobileMenu.trigger.textContent === 'Contract Menu') {
        mobileMenu.trigger.style.paddingBottom = '2rem';
    } else {
        mobileMenu.trigger.style.paddingBottom = '0rem'; 
    }
}
