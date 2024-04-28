document.addEventListener("DOMContentLoaded", function() {
    // RSVP form submission
    document.getElementById("rsvpForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        var rsvpData = {};
        formData.forEach(function(value, key) {
            rsvpData[key] = value;
        });
        // Here, you can send the RSVP data to Google Sheets using Google Apps Script or another method
        // Example: sendToGoogleSheets(rsvpData);
        document.getElementById("rsvpForm").reset();
        document.getElementById("responseMessage").innerText = "Thank you for your RSVP!";
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Indicator for menu
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    const indicator = document.querySelector('.indicator');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY  >= sectionTop - sectionHeight/3 ) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
                const linkRect = link.getBoundingClientRect();
                indicator.style.width = linkRect.width + 'px';
                indicator.style.left = linkRect.left + 'px';
            }
        });
    });

    // Toggle for FAQ items
    
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const answer = this.parentElement.nextElementSibling;
            const isActive = answer.style.display === 'block';

            if (isActive) {
                answer.style.display = 'none';
                this.textContent = '+';
            } else {
                answer.style.display = 'block';
                this.textContent = '-';
            }
        });
    });

    // JavaScript
    let timeout;

    // Function to show the menu
    function showMenu() {
        clearTimeout(timeout); // Clear any existing timeout
        document.getElementById('header').classList.add('fadeIn');
        document.getElementById('header').classList.remove('fadeOut');
    }

    // Function to hide the menu after an idle period
    function hideMenu() {
        timeout = setTimeout(() => {
            document.getElementById('header').classList.remove('fadeIn');
            document.getElementById('header').classList.add('fadeOut');
        }, 600); // Adjust the timeout value as needed (e.g., 3000 milliseconds = 3 seconds)
    }

    // Header sticky behavior
    const header = document.getElementById('header');
    const imageContainer = document.querySelector('.image-container');
    const fullscreenImage = document.querySelector('.fullscreen-image');
    const menu = document.getElementById('menu'); // Select the menu element

    // Event listener to show menu on hover
    window.addEventListener('mouseover', function() {
        showMenu();
    });
    // Event listener to hide menu after mouse leaves menu area
    window.addEventListener('mouseleave', function() {
        hideMenu();
    });
    // Update header position on scroll and resize
    function updateHeaderPosition() {
        showMenu(); // Show the menu when scrolling
        hideMenu(); // Start the idle timeout
        const imageBottom = imageContainer.offsetTop + imageContainer.offsetHeight - header.offsetHeight;
        if (window.scrollY > imageBottom) {
            header.classList.add('sticky');
            header.style.zIndex = 4; // Set zIndex to 1
            header.classList.add('background_color_change');
        } else {
            header.classList.remove('sticky');
            header.classList.remove('background_color_change');
            header.style.zIndex = -1;
        }
        // Check if the header is sticky and window scroll is past the full-screen image
        const fullscreenImageBottom = fullscreenImage.offsetTop + fullscreenImage.offsetHeight;
        if (header.classList.contains('sticky') && window.scrollY > fullscreenImageBottom) {
            header.style.zIndex = 4; // Set zIndex to 1
        } else if ((header.classList.contains('sticky') && window.scrollY < fullscreenImageBottom)){
            header.style.zIndex = -1; // Set zIndex to 1
        }
    }

    window.addEventListener('scroll', function() {
        updateHeaderPosition();
    });
// Timeout variable for delayed reappearing of the indicator
let resizeTimeout;


// Function to update indicator position
function updateIndicatorPosition() {
    const currentSection = document.querySelector('.active');
    const linkRect = currentSection.getBoundingClientRect();
    indicator.style.width = linkRect.width + 'px';
    indicator.style.left = linkRect.left + 'px';
    indicator.style.display = 'block'; // Show the indicator
    indicator.classList.add('fadeIn');
}

    window.addEventListener('resize', function() {
        updateHeaderPosition();
        clearTimeout(resizeTimeout); // Clear any existing timeout
        indicator.style.display = 'none'; // Hide the indicator
        // Set a timeout to reappear the indicator after resizing is complete
        resizeTimeout = setTimeout(function() {
            updateIndicatorPosition(); // Reappear the indicator
        }, 500); // Adjust the timeout duration as needed
    });

    // Event listener to show menu on hover
    menu.addEventListener('mouseover', function() {
        showMenu();
    });

    // Event listener to hide menu after mouse leaves menu area
    menu.addEventListener('mouseleave', function() {
        hideMenu();
    });

    // Detect background color brightness and adjust text color
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const backgroundColor = getBackgroundColor(header);
        const brightness = calculateBrightness(backgroundColor);
        if (brightness < 128) {
            header.style.color = '#ffffff'; // Dark background, set text color to light
        } else {
            header.style.color = '#000000'; // Light background, set text color to dark
        }
    });

    // Get background color of an element
    function getBackgroundColor(element) {
        const computedStyle = window.getComputedStyle(element);
        return computedStyle.getPropertyValue('background-color');
    }

    // Calculate brightness of a color
    function calculateBrightness(color) {
        const rgb = color.match(/\d+/g).map(Number);
        return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]);
    }
});

window.addEventListener('scroll', function() {
    const textOverlay = document.querySelector('.text-overlay');
    const imageBottom = textOverlay.offsetTop + textOverlay.offsetHeight-150;
    if (window.scrollY > imageBottom) {
        textOverlay.classList.add('fadeOut');
    } else {
        textOverlay.classList.remove('fadeOut');
        textOverlay.classList.add('fadeIn');
    }
});

window.addEventListener('DOMContentLoaded', function() {
    const textOverlay = document.querySelector('.text-overlay');
    const imageBottom = textOverlay.offsetTop + textOverlay.offsetHeight;
    // Options for the IntersectionObserver
    const options = {
        threshold: 0.7// Trigger when 50% of the text overlay is visible
    };

    // Callback function for the IntersectionObserver
    const callback = function(entries, observer) {
        entries.forEach(entry => {
            // If the text overlay is intersecting with the viewport
            if (entry.isIntersecting) {
                textOverlay.style.transition = 'opacity 0.7s ease';
                textOverlay.style.opacity = 0; // Fade out the text overlay
            }
        });
    };

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(callback, options);

    // Observe the text overlay
    observer.observe(textOverlay);
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const sectionHeight = section.clientHeight;
        
        // Calculate the percentage of the section visible in the window
        const visiblePercentage = (Math.min(sectionBottom, windowHeight) - Math.max(sectionTop, 0)) / sectionHeight;
        
        // Add fadeIn class when a certain percentage of the section is visible
        if (visiblePercentage >= 0.3) {
            section.classList.add('fadeIn');
            section.classList.remove('fadeOut'); // Remove fadeOut class if present
        } else {
            section.classList.remove('fadeIn'); // Remove fadeIn class if present
            section.classList.add('fadeOut');
        }
    });
});

