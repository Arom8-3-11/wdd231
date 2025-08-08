async function loadPortfolioSpotlights() {
    try {
        const response = await fetch('data/portfolio.json');
        const data = await response.json();
        const projects = data.projects || [];
        // Pick 3 random projects for spotlights
        const spotlights = [];
        const usedIndexes = new Set();
        while (spotlights.length < 3 && usedIndexes.size < projects.length) {
            const idx = Math.floor(Math.random() * projects.length);
            if (!usedIndexes.has(idx)) {
                spotlights.push(projects[idx]);
                usedIndexes.add(idx);
            }
        }
        displaySpotlights(spotlights);
    } catch (error) {
        console.error('Error loading portfolio spotlights:', error);
    }
}

function displaySpotlights(projects) {
    document.querySelectorAll('.spotlight-container').forEach(container => {
        container.innerHTML = '';
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'spotlight-card';
            card.innerHTML = `
                <h3>${project.title}</h3>
                <figure>
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </figure>
                <p>${project.description}</p>
                <p class="location">${project.location}</p>
            `;
            container.appendChild(card);
        });
    });
}

document.addEventListener('DOMContentLoaded', loadPortfolioSpotlights);
