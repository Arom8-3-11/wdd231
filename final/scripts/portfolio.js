document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');
    const portfolioGrid = document.getElementById('portfolioGrid');

    // Display all projects from portfolio.json
    fetch('data/portfolio.json')
        .then(response => response.json())
        .then(data => {
            portfolioGrid.innerHTML = '';
            if (Array.isArray(data.projects)) {
                data.projects.forEach(project => {
                    const card = document.createElement('div');
                    card.className = 'portfolio-card';
                    card.innerHTML = `
                        <figure>
                            <img src="${project.image}" alt="${project.title}" loading="lazy">
                        </figure>
                        <h3>${project.number}. ${project.title}</h3>
                        <p>${project.description}</p>
                        <p class="location">${project.location}</p>
                    `;
                    // Add click event for modal popup
                    card.addEventListener('click', function() {
                        showModal(project);
                    });
                    portfolioGrid.appendChild(card);
                });
            }
        })
        .catch(err => {
            portfolioGrid.innerHTML = "<p>Failed to load portfolio data.</p>";
        });

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
        // Use the same image, but larger if available
        const imageSrc = project.image;
        modalBody.innerHTML = `
            <div class="modal-image-container">
                <img src="${imageSrc}" alt="${project.title}" class="modal-image">
                <div class="modal-watermark">Galaci Studios</div>
            </div>
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p class="location">${project.location}</p>
        `;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Spotlights for index.html
    const spotlights = document.getElementById("spotlights");
    if (spotlights) {
        fetch("portfolio.json")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.sections)) {
                    // Pick first three sections for spotlight (customize as needed)
                    const featured = data.sections.slice(0, 3);
                    featured.forEach(section => {
                        const card = document.createElement("div");
                        card.className = "card portfolio-card";
                        card.innerHTML = `
                            <h2>${section.title}</h2>
                            <p>${section.description || ""}</p>
                            ${section.image ? `<img src="${section.image}" alt="${section.title}">` : ""}
                            ${section.link ? `<a href="${section.link}" target="_blank">View Project</a>` : ""}
                        `;
                        spotlights.appendChild(card);
                    });
                }
            })
            .catch(() => {
                spotlights.innerHTML = "<p>Unable to load spotlights.</p>";
            });
    }
});

