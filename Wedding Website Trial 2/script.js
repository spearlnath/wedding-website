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

//------------------FAQ- section------------------------
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
let lastScrollY = window.scrollY; // Initialize lastScrollY variable with current scroll position

document.addEventListener("scroll", function() {
    const faqSection = document.getElementById("faq");
    const imageSection = document.getElementById("image2"); // Change this to target the image2 element
    const imageHeight = imageSection.offsetHeight;
    const scrollY = window.scrollY;

    // Calculate the desired translateY value
    let translateY = 0; // Default to 5%

    // Check if the scroll position is below the top of the image section
    if (scrollY > imageSection.offsetTop) {
        // Calculate the percentage of scroll progress relative to the image section
        let scrollProgress = (scrollY - imageSection.offsetTop) / (imageHeight / 2);
        // Adjust the translateY value accordingly
        translateY = Math.min(50, Math.max(0, (scrollProgress * 45))); // 5% to 50%
    }

    // Apply the translateY value to the faqSection
    faqSection.style.transform = `translateY(-${translateY}%)`;
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

// JavaScript
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId); // Get the target section element
      const offsetTop = targetSection.offsetTop; // Get the offset from the top of the document to the target section
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Smooth scrolling behavior
      });
    });
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
