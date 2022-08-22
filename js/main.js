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

// Плавный переход по якорям в десктоп меню

