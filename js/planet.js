document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll('.planet');
    const container = document.querySelector('.position-relative');

    planets.forEach(planet => {
        const randomTop = Math.random() * 80 + 10;
        const randomLeft = Math.random() * 80;

        planet.style.top = `${randomTop}%`;
        planet.style.left = `${randomLeft}%`;
    });
});
