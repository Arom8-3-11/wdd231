// Directory Page JavaScript

const membersUrl = 'data/members.json';
const membersContainer = document.getElementById('members-container');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

// Fetch and display members
const getMembers = async () => {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();
        console.log('Members data loaded:', data);
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members:', error);
        membersContainer.innerHTML = '<p>Error loading member data. Please try again later.</p>';
    }
};

// Display members function
const displayMembers = (members) => {
    membersContainer.innerHTML = '';
    
    members.forEach((member) => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        // Get membership level text and class
        const membershipInfo = getMembershipInfo(member.membershipLevel);
        
        memberCard.innerHTML = `
            <div class="member-info">
                <h3>${member.name}</h3>
                <p class="address">${member.address}</p>
                <p class="phone">${member.phone}</p>
                <p class="website"><a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
                <p class="description">${member.description}</p>
                <span class="membership-level ${membershipInfo.class}">${membershipInfo.text}</span>
            </div>
        `;
        
        membersContainer.appendChild(memberCard);
    });
};

// Get membership level information
const getMembershipInfo = (level) => {
    switch (level) {
        case 3:
            return { text: 'Gold Member', class: 'gold' };
        case 2:
            return { text: 'Silver Member', class: 'silver' };
        case 1:
        default:
            return { text: 'Member', class: 'member' };
    }
};

// View toggle functionality
const toggleView = (viewType) => {
    if (viewType === 'grid') {
        membersContainer.className = 'members-grid';
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    } else {
        membersContainer.className = 'members-list';
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    }
};

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Load members data
    getMembers();
    
    // View toggle buttons
    if (gridViewBtn) {
        gridViewBtn.addEventListener('click', () => toggleView('grid'));
    }
    
    if (listViewBtn) {
        listViewBtn.addEventListener('click', () => toggleView('list'));
    }
});
