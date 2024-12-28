document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll('.float');
    planets.forEach(planet => {
        const randomTop = Math.random() * 80 + 10;
        const randomLeft = Math.random() * 80;
        planet.style.position = 'absolute';
        planet.style.top = `${randomTop}%`;
        planet.style.left = `${randomLeft}%`;
    });
});


document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.top = `${e.clientY}px`;
    star.style.left = `${e.clientX}px`;

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);
});
