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