// JavaScript para la galería de ofertas
let currentOffer = 0;
const offerImages = [
    "/img/ofertas.jpg",
    "/img/mango.jpg",
    "/img/ofertas.jpg"
]; // Ruta de las imágenes de oferta

function showOffer() {
    const offerSlide = document.querySelector(".offer-slide");
    offerSlide.innerHTML = `<img src="${offerImages[currentOffer]}" alt="Oferta ${currentOffer + 1}">`;
}

function nextOffer() {
    currentOffer++;
    if (currentOffer >= offerImages.length) {
        currentOffer = 0;
    }
    showOffer();
}

function prevOffer() {
    currentOffer--;
    if (currentOffer < 0) {
        currentOffer = offerImages.length - 1;
    }
    showOffer();
}

// Cambiar automáticamente las imágenes cada 3 segundos
setInterval(nextOffer, 3000);

// Mostrar la primera imagen al cargar la página
showOffer();


