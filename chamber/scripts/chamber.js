document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
    
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('show');
            hamburger.classList.toggle('open');
            
            if (nav.classList.contains('show')) {
                hamburger.innerHTML = '✕';
                hamburger.setAttribute('aria-label', 'Close navigation menu');
            } else {
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            }
        });
        
        nav.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                nav.classList.remove('show');
                hamburger.classList.remove('open');
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.classList.remove('show');
                hamburger.classList.remove('open');
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('show');
                hamburger.classList.remove('open');
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            }
        });
    }
});
