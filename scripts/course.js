// Course information and related functionality

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    initializeCourseDisplay();
    setupFilterButtons();
});

function initializeCourseDisplay() {
    displayCourses(courses);
    updateCreditsDisplay(courses);
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value and update display
            const filter = this.dataset.filter;
            currentFilter = filter;
            
            const filteredCourses = filterCourses(filter);
            displayCourses(filteredCourses);
            updateCreditsDisplay(filteredCourses);
        });
    });
}

function filterCourses(filter) {
    switch(filter) {
        case 'wdd':
            return courses.filter(course => course.subject === 'WDD');
        case 'cse':
            return courses.filter(course => course.subject === 'CSE');
        default:
            return courses;
    }
}

function displayCourses(coursesToDisplay) {
    const courseGrid = document.getElementById('course-grid');
    
    if (!courseGrid) {
        console.error('Course grid container not found');
        return;
    }
    
    courseGrid.innerHTML = '';
    
    coursesToDisplay.forEach(course => {
        const courseCard = createCourseCard(course);
        courseGrid.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = `course-card ${course.completed ? 'completed' : ''}`;
    
    card.innerHTML = `
        <div class="course-header">
            <h3 class="course-title">${course.subject} ${course.number}: ${course.title}</h3>
            <span class="course-credits">${course.credits} Credits</span>
        </div>
        <div class="course-content">
            <div class="course-details">
                <p class="course-description-full">${course.description}</p>
                <div class="course-tech">
                    ${course.technology.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="course-info">
                    <p><strong>Certificate:</strong> ${course.certificate}</p>
                    <p><strong>Prerequisites:</strong> ${course.subject === 'CSE' && course.number > 110 ? 'Previous CSE course' : 'None'}</p>
                </div>
            </div>
        </div>
        <div class="expand-indicator">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    `;
    
    // Add click event listener for expansion
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
    
    return card;
}

function updateCreditsDisplay(coursesToDisplay) {
    const creditsDisplay = document.getElementById('credits-display');
    
    if (!creditsDisplay) {
        console.error('Credits display element not found');
        return;
    }
    
    const totalCredits = coursesToDisplay.reduce((total, course) => total + course.credits, 0);
    const filterText = currentFilter === 'all' ? 'All Courses' : 
                     currentFilter === 'wdd' ? 'WDD Courses' : 'CSE Courses';
    
    creditsDisplay.textContent = `${filterText}: ${totalCredits} Credits Required`;
}
