document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.top = `${e.pageY}px`;
    star.style.left = `${e.pageX}px`;

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);
});


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar'); // Sélectionne la navbar
    if (navbar) {
        const navbarHeight = navbar.offsetHeight; // Mesure la hauteur de la navbar
        document.documentElement.style.setProperty('--bs-navbar-height', `${navbarHeight}px`);
    }
});
