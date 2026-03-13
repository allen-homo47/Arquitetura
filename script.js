// ===========================
// MODAL
// ===========================
function abrirGaleria(titulo, preco) {
    document.getElementById("tituloProjeto").innerText = titulo;
    document.getElementById("precoProjeto").innerText = "Preço: " + preco;
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "";
}

function fecharModalFora(e) {
    if (e.target === document.getElementById("modal")) fecharModal();
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") fecharModal();
});

// ===========================
// CAROUSEL (full-width)
// ===========================
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
let autoplayTimer;

function showSlide(i) {
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;
    slides.style.transform = `translateX(${-index * 100}vw)`;
}

function startAutoplay() {
    autoplayTimer = setInterval(() => showSlide(index + 1), 4000);
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
}

prevBtn.addEventListener('click', () => { stopAutoplay(); showSlide(index - 1); startAutoplay(); });
nextBtn.addEventListener('click', () => { stopAutoplay(); showSlide(index + 1); startAutoplay(); });

startAutoplay();

// ===========================
// NAVBAR scroll effect
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===========================
// AOS (Animate on Scroll)
// ===========================
const aosEls = document.querySelectorAll('[data-aos]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 120);
        }
    });
}, { threshold: 0.15 });

aosEls.forEach(el => observer.observe(el));

// ===========================
// Mobile menu toggle
// ===========================
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}
