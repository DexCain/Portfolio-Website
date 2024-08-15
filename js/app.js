const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('aside');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})