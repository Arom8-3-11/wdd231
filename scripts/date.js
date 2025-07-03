document.addEventListener('DOMContentLoaded', function() {
    // current year
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
    
    // last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const lastModified = document.lastModified;
        lastModifiedElement.textContent = `Last modified: ${lastModified}`;
    }
});
