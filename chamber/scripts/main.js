document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
    
    if (hamburger.classList.contains('open')) {
        hamburger.textContent = '✕';
    } else {
        hamburger.textContent = '☰';
    }
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;