// Chamber of Commerce JavaScript

// Set current year and last modified date
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentyear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Set last modified date
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
    
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        nav.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                nav.classList.remove('show');
            }
        });
        
        // Close mobile menu when window is resized to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.classList.remove('show');
            }
        });
    }
});
