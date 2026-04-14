/* ===== CARROSSEL MOBILE ===== */
(function () {
    function initCarrossel() {
        if (window.innerWidth > 640) return;

        document.querySelectorAll('.categoria-items').forEach(function (track) {
            var cards = track.querySelectorAll('.card-item');

            function atualizarDestaque() {
                var centro = track.scrollLeft + track.clientWidth / 2;
                var maisProximo = null;
                var menorDistancia = Infinity;

                cards.forEach(function (card) {
                    var cardCentro = card.offsetLeft + card.offsetWidth / 2;
                    var distancia = Math.abs(centro - cardCentro);
                    if (distancia < menorDistancia) {
                        menorDistancia = distancia;
                        maisProximo = card;
                    }
                });

                cards.forEach(function (card) {
                    card.classList.toggle('ativo', card === maisProximo);
                });
            }

            if (cards.length > 0) cards[0].classList.add('ativo');
            track.addEventListener('scroll', atualizarDestaque, { passive: true });
        });
    }

    initCarrossel();
    window.addEventListener('resize', initCarrossel);
})();


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


/* ===== MODAL DELIVERY ===== */
const modalOverlay = document.getElementById('modal-delivery');
const modalFechar = document.getElementById('modal-fechar');

document.querySelectorAll('.abrir-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        modalOverlay.classList.add('ativo');
    });
});

modalFechar.addEventListener('click', function () {
    modalOverlay.classList.remove('ativo');
});

modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('ativo');
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        modalOverlay.classList.remove('ativo');
    }
});