document.addEventListener('DOMContentLoaded', function() {
    // Modal logic
    const modals = document.querySelectorAll('.modal');
    const infoLinks = document.querySelectorAll('.info-link');
    const closeButtons = document.querySelectorAll('.close');

    // Open modals
    infoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Contact form validation and enhancement
    const form = document.getElementById('contactForm');
    if (form) {
        // Form submission handling
        form.addEventListener('submit', function(e) {
            document.getElementById('timestamp').value = new Date().toISOString();
            // Allow default submission to thankyou.html
        });

        // Phone input formatting
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                let value = this.value.replace(/\D/g, '');
                if (value.length >= 6) {
                    value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                } else if (value.length >= 3) {
                    value = value.replace(/(\d{3})(\d{3})/, '($1) $2');
                }
                this.value = value;
            });
        }
    }

    // Animate benefit cards if present (optional for contact page)
    const benefitCards = document.querySelectorAll('.benefit-card');
    if (benefitCards.length) {
        setTimeout(() => {
            benefitCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 200);
            });
        }, 500);
    }

    // Animate join-hero gradient background horizontally left-to-right and right-to-left
    const joinHero = document.querySelector('.join-hero');
    if (joinHero) {
        joinHero.style.background = 'linear-gradient(90deg, var(--text-color), var(--primary-color), var(--secondary-color), var(--text-color))';
        joinHero.style.backgroundSize = '300% 100%';
        joinHero.style.backgroundRepeat = 'no-repeat';

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
            joinHero.style.backgroundPosition = `${pos}% 0%`;
        }, 30);
    }
});
