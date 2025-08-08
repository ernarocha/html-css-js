// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (hamburgerMenu) {
        console.log('Hamburger menu found'); // Debug log
        
        hamburgerMenu.addEventListener('click', function(e) {
            console.log('Hamburger clicked'); // Debug log
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
            console.log('Active class:', this.classList.contains('active')); // Debug log
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
            }
        });
        
        // Close dropdown when clicking on dropdown links
        const dropdownLinks = hamburgerMenu.querySelectorAll('.dropdown-menu a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
            });
        });
    } else {
        console.log('Hamburger menu not found'); // Debug log
    }
});

// Alert on contact form submit
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Thank you for reaching out! Your message has been sent.');
    this.reset();
});

// Change background color of portfolio section on project title click
document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', function() {
        document.getElementById('projects').style.backgroundColor = '#f8f9fa'; // Light gray
    });
});

// Smooth scrolling with navbar offset
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = 152; // fixed navbar height
                
                // Home: absolute very top
                if (targetId === '#home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }

                else if (targetId === '#contact') {
                    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
                    return;
                }
                
                // Projects: align heading near top (ignore section padding)
                let scrollTarget = targetSection;
                if (targetId === '#projects') {
                    const projectsHeading = targetSection.querySelector('h2');
                    if (projectsHeading) scrollTarget = projectsHeading;
                }
                
                const targetPosition = scrollTarget.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
});

// Projects container random color change functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('#projects .container');
    
    if (projectsContainer) {
        // Array of pleasant colors for the background
        const colors = [
            '#f8f9fa', // light gray
            '#e3f2fd', // light blue
            '#f3e5f5', // light purple
            '#e8f5e8', // light green
            '#fff3e0', // light orange
            '#fce4ec', // light pink
            '#f1f8e9', // light lime
            '#e0f2f1', // light teal
            '#fafafa', // very light gray
            '#f5f5f5'  // light gray
        ];
        
        let currentColorIndex = 0;
        
        // Function to get a random color different from current
        function getRandomColor() {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * colors.length);
            } while (newIndex === currentColorIndex && colors.length > 1);
            
            currentColorIndex = newIndex;
            return colors[currentColorIndex];
        }
        
        // Add click event listener
        projectsContainer.addEventListener('click', function(e) {
            // Don't change color if clicking on cards or buttons
            if (e.target.closest('a')) {
                return;
            }
            
            const newColor = getRandomColor();
            projectsContainer.style.backgroundColor = newColor;
            
            
        });
        
        // Initialize with first color
        projectsContainer.style.backgroundColor = colors[0];
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const photo = document.querySelector(".hero-photo");

    // When cursor enters → tilt left
    photo.addEventListener("mouseenter", function() {
        photo.style.transform = "rotate(-3deg) scale(1.02)";
    });

    // When cursor leaves → tilt right then back
    photo.addEventListener("mouseleave", function() {
        photo.style.transform = "rotate(3deg) scale(1.02)";

        setTimeout(() => {
            photo.style.transform = "rotate(0deg) scale(1)";
        }, 150);
    });
});