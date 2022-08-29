// Мобильное меню

let burger = document.querySelector('.burger'),
    mobileMenu = document.querySelector('.mobile-menu'),
    mobileMenuList = document.querySelector('.mobile-nav');

burger.addEventListener('click', toggleBurger);
mobileMenuList.addEventListener("click", toggleBurger);

function toggleBurger() {
    burger.classList.toggle('opened');
    mobileMenu.classList.toggle('toggle');
}

// Плавный переход по якорям

let navItems = document.querySelectorAll('.main-page__header__nav ul li a'),
    mobileNavItems = document.querySelectorAll('.mobile-nav li a');

navItems.forEach((item) => href(item));
mobileNavItems.forEach((item) => href(item));

function href(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(item.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    })
}
