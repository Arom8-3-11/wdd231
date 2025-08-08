document.addEventListener('DOMContentLoaded', function() {
    // Animate final-hero gradient background horizontally left-to-right and right-to-left
    const finalHero = document.querySelector('.final-hero');
    if (finalHero) {
        finalHero.style.background = 'linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-one), var(--primary-color))';
        finalHero.style.backgroundSize = '300% 100%';
        finalHero.style.backgroundRepeat = 'no-repeat';

        let pos = 0;
        let direction = 1; // 1 = left-to-right, -1 = right-to-left
        const speed = 0.4; // Adjust for smoothness

        setInterval(() => {
            pos += direction * speed;
            if (pos >= 100) {
                pos = 100;
                direction = -1;
            } else if (pos <= 0) {
                pos = 0;
                direction = 1;
            }
            finalHero.style.backgroundPosition = `${pos}% 0%`;
        }, 30);
    }
    try {
        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById('currentyear');
        if (yearElement) {
            yearElement.textContent = currentYear;
        }
        
        const lastModified = new Date(document.lastModified).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const lastModifiedElement = document.getElementById('lastModified');
        if (lastModifiedElement) {
            lastModifiedElement.textContent = lastModified;
        }
        
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav ul');
        
        if (hamburger && nav) {
            hamburger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                nav.classList.toggle('show');
                hamburger.classList.toggle('open');
                
                if (nav.classList.contains('show')) {
                    hamburger.innerHTML = '✕';
                    hamburger.setAttribute('aria-label', 'Close navigation menu');
                    hamburger.setAttribute('aria-expanded', 'true');
                } else {
                    hamburger.innerHTML = '☰';
                    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
            
            nav.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') {
                    nav.classList.remove('show');
                    hamburger.classList.remove('open');
                    hamburger.innerHTML = '☰';
                    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
            
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    nav.classList.remove('show');
                    hamburger.classList.remove('open');
                    hamburger.innerHTML = '☰';
                    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
            
            document.addEventListener('click', function(e) {
                if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                    nav.classList.remove('show');
                    hamburger.classList.remove('open');
                    hamburger.innerHTML = '☰';
                    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        }
    } catch (error) {
        console.error('Error initializing chamber functionality:', error);
    }
    
    const navUl = document.querySelector('nav ul');
    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('show');
            hamburger.classList.toggle('open');
        });
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('show');
                hamburger.classList.remove('open');
            });
        });
    }
});


