async function loadMemberSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const members = data.members;
        
        const eligibleMembers = members.filter(member => {
            const level = member.membershipLevel;
            return level === 'Gold' || level === 'Silver' || level === 3 || level === 2;
        });
        
        const numSpotlights = Math.floor(Math.random() * 2) + 2;
        const selectedMembers = [];
        
        for (let i = 0; i < numSpotlights && i < eligibleMembers.length; i++) {
            const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
            const member = eligibleMembers.splice(randomIndex, 1)[0];
            selectedMembers.push(member);
        }
        
        displaySpotlights(selectedMembers);
    } catch (error) {
        console.error('Error loading member data:', error);
    }
}

function displaySpotlights(members) {
    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';
    
    members.forEach(member => {
        const spotlightCard = document.createElement('div');
        spotlightCard.classList.add('spotlight-card');
        
        let membershipLevel = member.membershipLevel;
        if (membershipLevel === 3) membershipLevel = 'Gold';
        if (membershipLevel === 2) membershipLevel = 'Silver';
        if (membershipLevel === 1) membershipLevel = 'Bronze';
        
        spotlightCard.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <span class="membership-level ${membershipLevel.toLowerCase()}">${membershipLevel} Member</span>
        `;
        
        container.appendChild(spotlightCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    getWeatherData();
    loadMemberSpotlights();
});
