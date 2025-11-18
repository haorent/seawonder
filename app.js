const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

if (menu) {
    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        if (menuLinks) menuLinks.classList.toggle('active');
    });
}
