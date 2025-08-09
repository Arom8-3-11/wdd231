document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    fetch('data/portfolio.json')
        .then(res => res.json())
        .then(data => {
            grid.innerHTML = '';
            data.projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'portfolio-card';
                card.className = 'spotlights-card';
                card.innerHTML = `
                    <figure>
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                    </figure>
                    <h3>${project.number}. ${project.title}</h3>
                    <p>${project.description}</p>
                    <p class="location">${project.location}</p>
                `;
                card.addEventListener('click', () => showProjectModal(project));
                grid.appendChild(card);
            });
        });
});

