document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll('.float');
    planets.forEach(planet => {
        const randomTop = Math.random() * 75;
        const randomLeft = Math.random() * 95;
        planet.style.position = 'absolute';
        planet.style.top = `${randomTop+10}%`;
        planet.style.left = `${randomLeft}%`;
    });
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