document.addEventListener('DOMContentLoaded', () => {
    fetch('data/discover.json')
        .then(res => res.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';
            data.items.forEach((item, idx) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.gridArea = `card${idx + 1}`;
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.name} photo" width="300" height="200" loading="lazy">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button type="button" class="learn-more-btn">Learn More</button>
                `;
                gallery.appendChild(card);
            });
        });

    const sidebar = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('discoverLastVisit');
    const now = Date.now();

    let message = '';
    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
        if (days < 1) {
            message = "Back so soon! Awesome!";
        } else if (days === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${days} days ago.`;
        }
    }
    sidebar.textContent = message;
    localStorage.setItem('discoverLastVisit', now);
});

// Example: Add a simple hover effect for portfolio images
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('.portfolio-card img')) {
        e.target.style.filter = 'brightness(0.85) drop-shadow(0 0 10px #059669)';
        e.target.style.transform = 'scale(1.05)';
    }
});
document.addEventListener('mouseout', function(e) {
    if (e.target.matches('.portfolio-card img')) {
        e.target.style.filter = '';
        e.target.style.transform = '';
    }
});