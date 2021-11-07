const menuItems = document.querySelectorAll('.menu-item');
const homeSection = document.getElementById('home')
const workSection = document.getElementById('work');
const contactSection = document.getElementById('contact');
const socialSection = document.getElementById('social');

menuItems.forEach(item => {
    if (item.dataset.id === 'home')
        activateSelectedMenu(item);

    item.addEventListener('click', () => {
        activateSelectedMenu(item)
    });
});

function activateSelectedMenu(item) {
    menuItems.forEach(function (menuitem) {
        if (menuitem.classList.contains('active')) {
            menuitem.classList.remove('active');
        }
    });

    hideAllSections();
    displaySelectionSection(item);
}

function hideAllSections() {
    homeSection.style.display = 'none';
    workSection.style.display = 'none';
    contactSection.style.display = 'none';
    socialSection.style.display = 'none';
}

function displaySelectionSection(item) {
    switch (item.dataset.id) {
        case 'home':
            item.classList.add('active');
            homeSection.style.display = 'block';
            break;
        case 'work':
            item.classList.add('active');
            workSection.style.display = 'block';
            break;
        case 'contact':
            item.classList.add('active');
            contactSection.style.display = 'block';
            break;
        case 'social':
            item.classList.add('active');
            socialSection.style.display = 'block';
            break;
    }
}