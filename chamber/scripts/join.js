document.addEventListener('DOMContentLoaded', function() {
    // membership form
    const formContainer = document.getElementById('membership-form-container');
    if (formContainer) {
        formContainer.innerHTML = `
        <section class="membership-form">
            <h2>Membership Application</h2>
            <form id="membershipForm" action="thankyou.html" method="get">
                <fieldset>
                    <legend>Applicant Information</legend>
                    <label for="firstName" title="Enter your first name">
                        First Name *
                        <input type="text" id="firstName" name="firstName" title="Enter your first name" autocomplete="given-name" required>
                    </label>
                    <label for="lastName" title="Enter your last name">
                        Last Name *
                        <input type="text" id="lastName" name="lastName" title="Enter your last name" autocomplete="family-name" required>
                    </label>
                    <label for="title" title="Enter your organizational title (minimum 7 characters, letters, hyphens, and spaces only)">
                        Title
                        <input type="text" id="title" name="title" title="Enter your organizational title" autocomplete="organization-title" pattern="[A-Za-z\\s\\-]{7,}">
                    </label>
                    <label for="email" title="Enter your email address">
                        Email Address *
                        <input type="email" id="email" name="email" title="Enter your email address" autocomplete="email" placeholder="example@email.com" required>
                    </label>
                    <label for="phone" title="Enter your mobile phone number">
                        Mobile Phone Number *
                        <input type="tel" id="phone" name="phone" title="Enter your mobile phone number" autocomplete="tel" required>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Business Information</legend>
                    <label for="businessName" title="Enter your business or organization name">
                        Organization Name *
                        <input type="text" id="businessName" name="businessName" title="Enter your business or organization name" autocomplete="organization" required>
                    </label>
                    <label for="businessDescription" title="Describe your business or organization">
                        Organization Description
                        <textarea id="businessDescription" name="businessDescription" title="Describe your business or organization" rows="4" placeholder="Describe your business, products, or services"></textarea>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Membership Level</legend>
                    <label for="membershipLevel" title="Select your membership level">
                        Membership Level *
                        <select id="membershipLevel" name="membershipLevel" title="Select your membership level" required>
                            <option value="">Please select a membership level</option>
                            <option value="NP Membership">NP Membership (Non-profit - No Fee)</option>
                            <option value="Bronze Membership">Bronze Membership</option>
                            <option value="Silver Membership">Silver Membership</option>
                            <option value="Gold Membership">Gold Membership</option>
                        </select>
                    </label>
                </fieldset>
                <input type="hidden" id="timestamp" name="timestamp">
                <input type="submit" value="Submit Application" class="submit-btn">
            </form>
        </section>
        `;
    }

    // Set timestamp when form loads
    document.getElementById('timestamp').value = new Date().toISOString();
    
    // Modal functionality
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
    
    // Form validation and enhancement
    const form = document.getElementById('membershipForm');
    const membershipRadios = document.querySelectorAll('input[name="membershipLevel"]');
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    // Highlight corresponding benefit card when membership level is selected
    membershipRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            benefitCards.forEach(card => {
                card.classList.remove('selected');
            });
            
            const selectedCard = document.querySelector(`[data-level="${this.id}"]`);
            if (selectedCard) {
                selectedCard.classList.add('selected');
            }
        });
    });
    
    // Form submission handling
    form.addEventListener('submit', function(e) {
        document.getElementById('timestamp').value = new Date().toISOString();
    });
    
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{3})/, '($1) $2');
        }
        this.value = value;
    });
    
    setTimeout(() => {
        benefitCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 200);
        });
    }, 500);
    
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
