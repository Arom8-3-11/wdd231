// Benefits data for membership levels
const benefitsData = [
    {
        level: "nonprofit",
        title: "NP Membership",
        price: "Free",
        modal: "nonprofit-modal"
    },
    {
        level: "bronze",
        title: "Bronze Membership",
        price: "$50/month",
        modal: "bronze-modal"
    },
    {
        level: "silver",
        title: "Silver Membership",
        price: "$100/month",
        modal: "silver-modal"
    },
    {
        level: "gold",
        title: "Gold Membership",
        price: "$200/month",
        modal: "gold-modal"
    }
];

// create benefit card
function createBenefitCard(benefit) {
    return `
        <div class="benefit-card animate-card" data-level="${benefit.level}">
            <h3>${benefit.title}</h3>
            <p class="price">${benefit.price}</p>
            <a href="#" class="info-link" data-modal="${benefit.modal}">Learn More</a>
        </div>
    `;
}

// Function to create the entire benefits section
function createBenefitsSection() {
    const benefitCards = benefitsData.map(benefit => createBenefitCard(benefit)).join('');
    
    return `
        <section class="membership-benefits">
            <h2>Membership Levels</h2>
            <div class="benefits-grid">
                ${benefitCards}
            </div>
        </section>
    `;
}

// Function to initialize benefits section
function initializeBenefits() {
    const container = document.getElementById('membership-benefits-container');
    if (container) {
        container.innerHTML = createBenefitsSection();
    }
}

// Initialize benefits when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeBenefits();
});
