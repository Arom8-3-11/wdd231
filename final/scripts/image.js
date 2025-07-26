// Portfolio image data and information
const portfolioImages = [
    {
        id: "project1",
        title: "Project 1",
        thumbnail: "images/project1.jpg",
        largeImage: "images/project1-large.jpg",
        alt: "Project 1",
        description: "Brief description of project 1.",
        detailedDescription: "This is a detailed description of Project 1. It includes the technologies used, challenges faced, and solutions implemented.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "#",
        category: "web-development"
    },
    {
        id: "project2",
        title: "Project 2",
        thumbnail: "images/project2.jpg",
        largeImage: "images/project2-large.jpg",
        alt: "Project 2",
        description: "Brief description of project 2.",
        detailedDescription: "This is a detailed description of Project 2. It showcases advanced features and innovative solutions.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#",
        category: "full-stack"
    },
    {
        id: "project3",
        title: "Project 3",
        thumbnail: "images/project3.jpg",
        largeImage: "images/project3-large.jpg",
        alt: "Project 3",
        description: "Brief description of project 3.",
        detailedDescription: "This is a detailed description of Project 3. It demonstrates modern web development practices.",
        technologies: ["Vue.js", "Python", "PostgreSQL"],
        link: "#",
        category: "full-stack"
    },
    {
        id: "project4",
        title: "Project 4",
        thumbnail: "images/project4.jpg",
        largeImage: "images/project4-large.jpg",
        alt: "Project 4",
        description: "Brief description of project 4.",
        detailedDescription: "This is a detailed description of Project 4. It focuses on mobile-first responsive design.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        link: "#",
        category: "responsive-design"
    }
];

// Function to get all portfolio images
function getPortfolioImages() {
    return portfolioImages;
}

// Function to get image by ID
function getImageById(id) {
    return portfolioImages.find(image => image.id === id);
}

// Function to get images by category
function getImagesByCategory(category) {
    return portfolioImages.filter(image => image.category === category);
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        portfolioImages,
        getPortfolioImages,
        getImageById,
        getImagesByCategory
    };
}
