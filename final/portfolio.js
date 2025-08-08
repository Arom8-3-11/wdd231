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

function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width:100%;max-width:400px;">
        <p>${project.description}</p>
        <p><strong>Location:</strong> ${project.location}</p>
    `;
    modal.style.display = 'block';
    modal.querySelector('.close').onclick = () => {
        modal.style.display = 'none';
    };
    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = 'none';
    };
}
