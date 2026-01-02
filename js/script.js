/* js/script.js */

function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');
    const text = document.getElementById('mode-text');
    
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
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