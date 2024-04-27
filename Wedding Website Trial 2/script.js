// Cloud animations
window.addEventListener('scroll', function() {
    const clouds = document.querySelectorAll('.cloud');
    const scrollPosition = window.pageYOffset;
    
    clouds.forEach(function(cloud) {
        const cloudOffset = cloud.offsetTop;
        const distance = (scrollPosition - cloudOffset) * 0.2;
        
        cloud.style.transform = 'translateX(' + distance + 'px)';
    });
});

// Sticky menu with section indicator
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navHeight = document.querySelector('header').clientHeight;
        const id = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop - navHeight && window.scrollY < sectionTop + sectionHeight - navHeight) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            document.querySelector('nav ul li a[href="#' + id + '"]').classList.add('active');
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


//Sticky Menu
// JavaScript
let timeout;

// Function to show the menu
function showMenu() {
    document.getElementById('header').classList.remove('hidden');
    clearTimeout(timeout); // Clear any existing timeout
    document.getElementById('header').classList.add('fadeIn');
    document.getElementById('header').classList.remove('fadeOut');

}
// Function to hide the menu after an idle period
function hideMenu() {
    document.getElementById('header').classList.remove('hidden');
    timeout = setTimeout(() => {
        document.getElementById('header').classList.remove('fadeIn');
        document.getElementById('header').classList.add('fadeOut');
    }, 600); // Adjust the timeout value as needed (e.g., 3000 milliseconds = 3 seconds)
}
const header = document.getElementById('header'); // Select the menu element
const menu = document.getElementById('menu'); // Select the menu element
// Header sticky behavior
// Update header position on scroll and resize
function updateHeaderPosition() {
    showMenu(); // Show the menu when scrolling
    hideMenu(); // Start the idle timeout
}
// Event listener to show menu on hover
menu.addEventListener('mouseover', function() {
    showMenu();
});
// Event listener to hide menu after mouse leaves menu area
menu.addEventListener('mouseleave', function() {
    hideMenu();
});

window.addEventListener('scroll', function() {
    updateHeaderPosition();
});

//RSVP Button


document.addEventListener("DOMContentLoaded", function() {
    const rsvpButton = document.getElementById("rsvpButton");
    const imageContainer = document.querySelector(".background-image");
    const image = document.querySelector(".background-image img");

    // Calculate the height of the image
    const imageHeight = image.clientHeight;

    window.addEventListener("scroll", function() {
        // Calculate the percentage of image height scrolled
        const scrollPosition = window.scrollY;
        const scrolledPercentage = (scrollPosition / imageHeight) * 100;

        // Adjust the visibility of the RSVP button based on scroll position
        if (scrolledPercentage >= 15 && scrolledPercentage <= 60) {
            rsvpButton.classList.add("sticky", "fadeIn");
            rsvpButton.classList.remove("fadeOut");
        } else {
            rsvpButton.classList.remove("fadeIn");
            rsvpButton.classList.add("fadeOut");
        }
    });
});
