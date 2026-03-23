const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
const deliveryMobile = document.getElementById('delivery-mobile');

toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    deliveryMobile.classList.toggle('open', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        deliveryMobile.classList.remove('open');
    });
});

const heroImg = document.querySelector('.hero-image img');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = 400;
    const maxScale = 1.08;

    const scale = 1 + (Math.min(scrollY, maxScroll) / maxScroll) * (maxScale - 1);
    heroImg.style.setProperty('--scroll-scale', scale);
});