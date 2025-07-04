document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger && nav) {
        hamburger.innerHTML = '☰';
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
        
        hamburger.addEventListener('click', function() {
            const isOpen = nav.classList.contains('show');
            
            nav.classList.toggle('show');
            
            if (!isOpen) {
                hamburger.innerHTML = '✕';
                hamburger.setAttribute('aria-expanded', 'true');
            } else {
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                if (window.innerWidth < 768) {
                    nav.classList.remove('show');
                    hamburger.innerHTML = '☰';
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                nav.classList.remove('show');
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        document.addEventListener('click', function(e) {
            if (window.innerWidth < 768 && 
                !hamburger.contains(e.target) && 
                !nav.contains(e.target) && 
                nav.classList.contains('show')) {
                nav.classList.remove('show');
                hamburger.innerHTML = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hamburger.click();
            }
        });
        
        const homeLink = document.querySelector('nav a[href="index.html"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
});
