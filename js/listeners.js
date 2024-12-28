document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll('.float');
    planets.forEach(planet => {
        const randomTop = Math.random() * 80;
        const randomLeft = Math.random() * 80;
        planet.style.position = 'absolute';
        planet.style.top = `${randomTop+10}%`;
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

document.querySelectorAll('.planet').forEach(container => {
    const tooltipText = container.getAttribute('data-title');

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-custom';
    tooltip.innerText = tooltipText;
    document.body.appendChild(tooltip);

    container.addEventListener('mouseenter', (e) => {
        const rect = container.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`; // Centré horizontalement
        tooltip.style.top = `${rect.bottom}px`; // Place sous la planète
        tooltip.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});
