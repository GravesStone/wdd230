document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('open');
        menu.classList.toggle('open');
    });
});