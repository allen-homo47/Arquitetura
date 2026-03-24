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


let img1 = document.querySelector(".fototm1");
let img2 = document.querySelector(".fototm2");
let tm00 = document.querySelector(".tm00");
let tm01 = document.querySelector(".tm01");
let tm02 = document.querySelector(".tm02");
let tm03 = document.querySelector(".tm03");
let tm04 = document.querySelector(".tm04");
let tm05 = document.querySelector(".tm05");
let tm06 = document.querySelector(".tm06");



 tm00.addEventListener("click", function(){
img1.src = "img/PHOTO-2026-03-10-10-38-46 2.jpg";
img2.src = "img/PHOTO-2026-03-10-10-38-47.jpg";

 });

 
 tm01.addEventListener("click", function(){
img1.src = "img/PHOTO-2026-03-10-10-39-00 2.jpg";
img2.src = "img/PHOTO-2026-03-10-10-39-01 2.jpg";

 });

  tm02.addEventListener("click", function(){
img1.src = "img/PHOTO-2026-03-10-10-39-00 5.jpg";
img2.src = "img/PHOTO-2026-03-10-10-39-00 3.jpg";

 });

tm03.addEventListener("click", function(){
img1.src = "img/PHOTO-2026-03-10-10-38-46 2.jpg";
img2.src = "img/PHOTO-2026-03-10-10-38-49.jpg";

 });

 tm04.addEventListener("click", function(){
img1.src = "img/PHOTO-2026-03-10-10-39-01 6.jpg";
img2.src = "img/PHOTO-2026-03-10-10-39-01 4.jpg";

 });

 
 tm05.addEventListener("click", function(){
img1.src = "img/PHOTO-2026-03-10-10-38-59 2.jpg";
img2.src = "img/PHOTO-2026-03-10-10-38-53.jpg";

 });

tm06.addEventListener("click", function(){
img1.src = "img/PHOTO-2026-03-10-10-39-02 2.jpg";
img2.src = "img/PHOTO-2026-03-10-10-39-02 2.jpg";

 });
