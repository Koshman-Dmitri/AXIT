const anchors = document.querySelectorAll('a[href*="#"]');
const navLinks = document.querySelectorAll('.nav__link');
const priceItem = document.querySelectorAll('.price__item');
const priceItemWrapper = document.querySelectorAll('.price-item__title-wrapper');
const tabs = document.querySelectorAll('.tab');
const featureContent = document.querySelectorAll('.feature__content');

// Плавная прокрутка
for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').slice(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// Активная вкладка в навигации (НАДО НЕ ПО КЛИКУ, А ПО СКРОЛЛУ)
// navLinks.forEach(function(link) {
//     link.addEventListener('click', function() {
//         navLinks.forEach(item => item.classList.remove('active'));
//         this.classList.add('active');
//     })
// })

// Окна с табами
tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        tabs.forEach(item => item.classList.remove('active'));
        this.classList.add('active');

        featureContent.forEach(content => content.classList.add('none'));

        const tabID = tab.getAttribute('id').slice(3);
        const tabContent = document.querySelector(`[data-tab${tabID}]`);

        tabContent.classList.remove('none');
    })
})

// Анимация цен
priceItem.forEach(function(price) {
    price.addEventListener('mouseover', function() {
        priceItemWrapper.forEach(item => item.classList.remove('active'));
        price.firstElementChild.classList.add('active');
    })
})


// Анимация скролла
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    console.log(scrollDistance);

    document.querySelectorAll('[data-content]').forEach((el, i) => {
        if (el.offsetTop + el.clientHeight - document.querySelector('.nav-wrapper').clientHeight <= scrollDistance) {
            navLinks.forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            })

            navLinks[i].classList.add('active');
        }
    });
});


















