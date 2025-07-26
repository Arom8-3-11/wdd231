document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    const firstName = urlParams.get('firstName');
    const lastName = urlParams.get('lastName');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const businessName = urlParams.get('businessName');
    const membershipLevel = urlParams.get('membershipLevel');
    const timestamp = urlParams.get('timestamp');
    

    if (firstName) {
        document.getElementById('display-firstName').textContent = firstName;
    }
    
    if (lastName) {
        document.getElementById('display-lastName').textContent = lastName;
    }
    
    if (email) {
        document.getElementById('display-email').textContent = email;
    }
    
    if (phone) {
        document.getElementById('display-phone').textContent = phone;
    }
    
    if (businessName) {
        document.getElementById('display-businessName').textContent = businessName;
    }
    
    if (membershipLevel) {
        document.getElementById('display-membershipLevel').textContent = membershipLevel;
    }
    
    if (timestamp) {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        document.getElementById('display-timestamp').textContent = formattedDate;
    }
});

// Thank you page data and functionality
const thankYouData = {
    hero: {
        title: "Thank You!",
        message: "We appreciate your interest in joining our Chamber of Commerce. Your application has been received and is being processed."
    },
    
    nextSteps: [
        {
            number: "1",
            title: "Review Process",
            description: "Our team will review your application within 2-3 business days."
        },
        {
            number: "2", 
            title: "Verification",
            description: "We may contact you to verify your business information and answer any questions."
        },
        {
            number: "3",
            title: "Welcome Package", 
            description: "Once approved, you'll receive a welcome package with membership details and benefits."
        },
        {
            number: "4",
            title: "Get Involved",
            description: "Start participating in chamber events and networking opportunities!"
        }
    ],
    
    contactInfo: {
        title: "Questions?",
        message: "If you have any questions about your application or membership, please don't hesitate to contact us:",
        details: [
            { label: "Phone", value: "(555) 123-4567" },
            { label: "Email", value: "membership@chamber.com" },
            { label: "Office Hours", value: "Monday - Friday, 9:00 AM - 5:00 PM" }
        ]
    }
};

// Function to create application summary card
function createApplicationSummary() {
    return `
        <section class="application-summary card">
            <h2>Application Summary</h2>
            <div class="summary-content">
                <div class="summary-item">
                    <label>First Name:</label>
                    <span id="display-firstName">Not provided</span>
                </div>
                <div class="summary-item">
                    <label>Last Name:</label>
                    <span id="display-lastName">Not provided</span>
                </div>
                <div class="summary-item">
                    <label>Email:</label>
                    <span id="display-email">Not provided</span>
                </div>
                <div class="summary-item">
                    <label>Mobile Phone:</label>
                    <span id="display-phone">Not provided</span>
                </div>
                <div class="summary-item">
                    <label>Business Name:</label>
                    <span id="display-businessName">Not provided</span>
                </div>
                <div class="summary-item">
                    <label>Membership Level:</label>
                    <span id="display-membershipLevel">Not selected</span>
                </div>
                <div class="summary-item">
                    <label>Application Date:</label>
                    <span id="display-timestamp">Not available</span>
                </div>
            </div>
        </section>
    `;
}

// Function to create next steps card
function createNextStepsCard() {
    const stepsHTML = thankYouData.nextSteps.map(step => `
        <div class="step">
            <h3>${step.number}. ${step.title}</h3>
            <p>${step.description}</p>
        </div>
    `).join('');
    
    return `
        <section class="next-steps card">
            <h2>What Happens Next?</h2>
            <div class="steps-grid">
                ${stepsHTML}
            </div>
        </section>
    `;
}

// Function to create contact info card
function createContactInfoCard() {
    const contactDetailsHTML = thankYouData.contactInfo.details.map(detail => `
        <p><strong>${detail.label}:</strong> ${detail.value}</p>
    `).join('');
    
    return `
        <section class="contact-info card">
            <h2>${thankYouData.contactInfo.title}</h2>
            <p>${thankYouData.contactInfo.message}</p>
            <div class="contact-details">
                ${contactDetailsHTML}
            </div>
        </section>
    `;
}

// Function to populate form data from URL parameters
function populateFormData() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const firstName = urlParams.get('firstName');
    const lastName = urlParams.get('lastName');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const businessName = urlParams.get('businessName');
    const membershipLevel = urlParams.get('membershipLevel');
    const timestamp = urlParams.get('timestamp');
    
    if (firstName) {
        document.getElementById('display-firstName').textContent = firstName;
    }
    
    if (lastName) {
        document.getElementById('display-lastName').textContent = lastName;
    }
    
    if (email) {
        document.getElementById('display-email').textContent = email;
    }
    
    if (phone) {
        document.getElementById('display-phone').textContent = phone;
    }
    
    if (businessName) {
        document.getElementById('display-businessName').textContent = businessName;
    }
    
    if (membershipLevel) {
        document.getElementById('display-membershipLevel').textContent = membershipLevel;
    }
    
    if (timestamp) {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        document.getElementById('display-timestamp').textContent = formattedDate;
    }
}

// Function to initialize the thank you page
function initializeThankYouPage() {
    const main = document.querySelector('main');
    const heroSection = document.querySelector('.thank-you-hero');
    
    // Create and insert the card sections after the hero
    const cardsHTML = createApplicationSummary() + createNextStepsCard() + createContactInfoCard();
    
    // Insert after hero section
    heroSection.insertAdjacentHTML('afterend', cardsHTML);
    
    // Populate form data
    populateFormData();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeThankYouPage();

    // Hamburger menu toggle for mobile (consistent with index/directory)
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('show');
            hamburger.classList.toggle('open');
        });
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('show');
                hamburger.classList.remove('open');
            });
        });
    }

    // Animate thank-you-hero gradient background horizontally left-to-right and right-to-left
    const thankYouHero = document.querySelector('.thank-you-hero');
    if (thankYouHero) {
        thankYouHero.style.background = 'linear-gradient(90deg, var(--text-color), var(--primary-color), var(--secondary-color), var(--text-color))';
        thankYouHero.style.backgroundSize = '300% 100%';
        thankYouHero.style.backgroundRepeat = 'no-repeat';

        let pos = 0;
        let direction = 1;
        const speed = 0.4;

        setInterval(() => {
            pos += direction * speed;
            if (pos >= 100) {
                pos = 100;
                direction = -1;
            } else if (pos <= 0) {
                pos = 0;
                direction = 1;
            }
            thankYouHero.style.backgroundPosition = `${pos}% 0%`;
        }, 30);
    }
});
