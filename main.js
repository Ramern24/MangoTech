// main.js
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`Has hecho clic en ${event.target.textContent}`);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
