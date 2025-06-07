const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
overlay.style.display = 'none';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.zIndex = '9999';
overlay.style.cursor = 'pointer';

const fullImage = document.createElement('img');
fullImage.style.maxWidth = '90%';
fullImage.style.maxHeight = '90%';
overlay.appendChild(fullImage);

const closeButton = document.createElement('button');
closeButton.innerHTML = '<i class="bi bi-x-lg" style="font-size: 30px; color: white;"></i>';
closeButton.style.position = 'absolute';
closeButton.style.top = '20px';
closeButton.style.right = '20px';
closeButton.style.backgroundColor = 'transparent';
closeButton.style.border = 'none';
closeButton.style.cursor = 'pointer';
overlay.appendChild(closeButton);

document.body.appendChild(overlay);

const images = document.querySelectorAll('img');

images.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener('click', () => {
        fullImage.src = img.src;
        overlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});
