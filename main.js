const mobileNavBtn = document.querySelector('.mobileNav');
const anchors = document.querySelectorAll('a[href*="#"]');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const priceItem = document.querySelectorAll('.price__item');
const priceItemWrapper = document.querySelectorAll('.price-item__title-wrapper');
const tabs = document.querySelectorAll('.tab');
const featureContent = document.querySelectorAll('.feature__content');
const content = document.querySelectorAll('[data-content]');

//Кнопка мобильной навигации
mobileNavBtn.addEventListener('click', () => {
    mobileNavBtn.classList.toggle('active');
    navList.classList.toggle('invisible');
});

// Плавная прокрутка
for (let anchor of anchors) {
    anchor.parentElement.addEventListener('click', function(e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').slice(1);
        const y = document.getElementById(blockID).getBoundingClientRect().top + window.pageYOffset - document.querySelector('.nav-wrapper').clientHeight;

        window.scrollTo({top: y, behavior: 'smooth'});

        mobileNavBtn.classList.remove('active');
    })
}


// Анимация ссылок навигации (при нажатии и скролле)
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    content.forEach((el, i) => {
        if (el.offsetTop + el.clientHeight - document.querySelector('.nav-wrapper').clientHeight <= scrollDistance) {
            navLinks.forEach((el) => el.classList.remove('active'))
            
            //Чтобы не было активной ссылки, когда блок Header
            if (scrollDistance >= (content[1].offsetTop - content[0].offsetTop)) {
                navLinks[i].classList.add('active');
            }
            
        }
    });
});


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










