function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');
    const text = document.getElementById('mode-text');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.textContent = '☀️';
        text.textContent = 'Switch to Light Mode';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'Switch to Dark Mode';
    }
}

function toggleFaq(el) {
    el.classList.toggle('active');
    const span = el.querySelector('span');
    span.textContent = el.classList.contains('active') ? '−' : '+';
}

/* --- Drone Lightbox --- */
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');

    img.src = src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
