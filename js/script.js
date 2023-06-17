// script.js

// script.js

// Toggle do menu hamburguer
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Responsividade do menu hamburguer
function toggleMenu() {
  if (window.innerWidth <= 600 && window.innerHeight <= 800) {
    menuToggle.style.display = 'block';
    navLinks.style.display = 'none';
  } else {
    menuToggle.style.display = 'none';
    navLinks.style.display = 'block';
  }
}

// Verificar o estado do menu no carregamento e ao redimensionar a tela
window.addEventListener('load', toggleMenu);
window.addEventListener('resize', toggleMenu);


// Carrossel de imagens
const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = carouselContainer.querySelectorAll('img');
let currentIndex = 0;
let timer;

// Função para exibir a próxima imagem do carrossel
function showNextImage() {
  carouselImages[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].classList.add('active');
}

// Iniciar o carrossel
function startCarousel() {
  timer = setInterval(showNextImage, 3000);
}

// Parar o carrossel
function stopCarousel() {
  clearInterval(timer);
}

// Iniciar o carrossel automaticamente
startCarousel();

// Pausar o carrossel quando o mouse estiver sobre o carrossel
carouselContainer.addEventListener('mouseenter', stopCarousel);

// Retomar o carrossel quando o mouse sair do carrossel
carouselContainer.addEventListener('mouseleave', startCarousel);
