document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const body = document.body;

    // Логика появления шапки при скролле на ПК
    const handleScroll = () => {
        if (window.innerWidth > 1024) {
            if (window.scrollY > 40) {
                header.classList.add('header--visible');
            } else {
                header.classList.remove('header--visible');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Проверка при загрузке (если страница сразу открыта прокрученной)
    handleScroll();

    // Управление бургер-меню для планшетов и мобильных
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });

    // Закрытие меню при клике на пункты
    const menuLinks = document.querySelectorAll('.header__nav a, .header__phone--mobile a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('lock');
        });
    });
});