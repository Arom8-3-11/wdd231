document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');

    // Load portfolio images and create cards
    function loadPortfolioCards() {
        const images = getPortfolioImages();
        
        images.forEach(image => {
            const cardElement = createCardElement(image);
            portfolioGrid.appendChild(cardElement);
        });
    }

    // Create card element
    function createCardElement(image) {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-project', image.id);
        
        card.innerHTML = `
            <img src="${image.thumbnail}" alt="${image.alt}">
            <h3>${image.title}</h3>
            <p>${image.description}</p>
        `;
        
        // Add click event listener
        card.addEventListener('click', function() {
            showModal(image);
        });
        
        return card;
    }

    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function showModal(project) {
        modalBody.innerHTML = `
            <h2>${project.title} - Detailed View</h2>
            <img src="${project.largeImage}" alt="${project.alt}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;">
            <p>${project.detailedDescription}</p>
            <h3>Technologies Used:</h3>
            <ul>
                ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <p><strong>Category:</strong> ${project.category.replace('-', ' ')}</p>
            <a href="${project.link}" target="_blank" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: #007bff; color: white; text-decoration: none; border-radius: 4px;">View Project</a>
        `;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Initialize portfolio
    loadPortfolioCards();
});
        modal.style.display = 'none';
    }
});
