document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.spotlight-container');
    if (!container) return;
    fetch('data/spotlights.json')
        .then(res => res.json())
        .then(data => {
            container.innerHTML = '';
            data.spotlights.forEach(spotlight => {
                const card = document.createElement('div');
                card.className = 'spotlights-card';
                card.innerHTML = `
                    <figure>
                        <img src="${spotlight.image}" alt="${spotlight.title}" loading="lazy">
                    </figure>
                    <h3>${spotlight.title}</h3>
                    <p>${spotlight.description}</p>
                    <p class="location">${spotlight.location}</p>
                `;
                // Use the same modal function as portfolio
                card.addEventListener('click', () => showProjectModal(spotlight));
                container.appendChild(card);
            });
        });
});

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
                    <img src="${project.image}" alt="${project.title}" loading="lazy" class="spotlight-img">
                </figure>
                <p>${project.description}</p>
                <p class="location">${project.location}</p>
            `;
            // Add click event for modal popup on image
            card.querySelector('.spotlight-img').addEventListener('click', function(e) {
                e.stopPropagation();
                showSpotlightModal(project);
            });
            container.appendChild(card);
        });
    });
}

// Modal logic for spotlights
function ensureSpotlightModal() {
    let modal = document.getElementById('spotlightModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'spotlightModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <div id="spotlightModalBody"></div>
            </div>
        `;
        document.body.appendChild(modal);
        // Close modal events
        modal.querySelector('.close').addEventListener('click', closeSpotlightModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeSpotlightModal();
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') closeSpotlightModal();
        });
    }
    return modal;
}

function showSpotlightModal(project) {
    const modal = ensureSpotlightModal();
    const modalBody = modal.querySelector('#spotlightModalBody');
    modalBody.innerHTML = `
        <div class="modal-image-container">
            <img src="${project.image}" alt="${project.title}" class="modal-image">
            <div class="modal-watermark">Galaci Studios</div>
        </div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p class="location">${project.location}</p>
    `;
    modal.style.display = 'block';
}

function closeSpotlightModal() {
    const modal = document.getElementById('spotlightModal');
    if (modal) modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loadPortfolioSpotlights);
