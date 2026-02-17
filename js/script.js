/* --- Dark Mode Toggle --- */
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');
    const text = document.getElementById('mode-text');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.innerHTML = '&#9788;';
        text.textContent = 'Switch to Light Mode';
        localStorage.setItem('darkMode', 'true');
    } else {
        icon.innerHTML = '&#9789;';
        text.textContent = 'Switch to Dark Mode';
        localStorage.setItem('darkMode', 'false');
    }
}

/* Persist dark mode preference */
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        var icon = document.getElementById('mode-icon');
        var text = document.getElementById('mode-text');
        if (icon) icon.innerHTML = '&#9788;';
        if (text) text.textContent = 'Switch to Light Mode';
    }
});

/* --- FAQ Accordion --- */
function toggleFaq(el) {
    el.classList.toggle('active');
    var span = el.querySelector('.faq-q span');
    if (span) {
        span.textContent = el.classList.contains('active') ? '\u2212' : '+';
    }
}

/* --- Drone Lightbox --- */
function openLightbox(src) {
    var lightbox = document.getElementById('lightbox');
    var img = document.getElementById('lightbox-img');
    if (lightbox && img) {
        img.src = src;
        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
