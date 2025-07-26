// Modal data for membership benefits
const modalData = {
    'nonprofit-modal': {
        title: 'NP Membership Benefits',
        benefits: [
            'Access to chamber networking events',
            'Community involvement opportunities',
            'Basic business resources',
            'Monthly newsletter subscription'
        ]
    },
    'bronze-modal': {
        title: 'Bronze Membership Benefits',
        benefits: [
            'All NP Membership benefits',
            'Business directory listing',
            'Ribbon cutting ceremony participation',
            'Basic advertising opportunities',
            'Event discounts (10%)'
        ]
    },
    'silver-modal': {
        title: 'Silver Membership Benefits',
        benefits: [
            'All Bronze Membership benefits',
            'Featured business spotlights',
            'Training and education discounts (15%)',
            'Event hosting opportunities',
            'Enhanced directory listing',
            'Social media promotion'
        ]
    },
    'gold-modal': {
        title: 'Gold Membership Benefits',
        benefits: [
            'All Silver Membership benefits',
            'Priority event placement',
            'Premium advertising opportunities',
            'VIP networking events',
            'Business consultation services',
            'Homepage spotlight rotation',
            'Training discounts (25%)'
        ]
    }
};

// Function to create modal HTML
function createModal(modalId, data) {
    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal';
    
    const benefitsList = data.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>${data.title}</h3>
            <ul>
                ${benefitsList}
            </ul>
        </div>
    `;
    
    return modal;
}

// Function to initialize all modals
function initializeModals() {
    const body = document.body;
    
    // Create and append all modals
    Object.keys(modalData).forEach(modalId => {
        const modal = createModal(modalId, modalData[modalId]);
        body.appendChild(modal);
    });
}

// Initialize modals when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeModals();
});
