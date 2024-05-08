//------------CLOUD and PLANE Animation -------------------
let lastScrollY = 0;
let lastWindowWidth = window.innerWidth;

function updatePositions() {
    const deltaY = window.scrollY - lastScrollY;
    const windowWidth = window.innerWidth;

    const plane = document.querySelector(".plane");
    const clouds = document.querySelectorAll(".cloud");

    // Move the plane to the right based on scroll
    const planeLeft = parseFloat(window.getComputedStyle(plane).left);
    plane.style.left = `${planeLeft + deltaY}px`;

    // Move the clouds to the right based on scroll
    clouds.forEach(cloud => {
        const cloudRight = parseFloat(window.getComputedStyle(cloud).right);
        const newRight = cloudRight - deltaY * 0.5; // Adjust the speed of cloud movement if needed
        cloud.style.right = `${newRight}px`;
    });

    lastScrollY = window.scrollY;
    lastWindowWidth = windowWidth;
}

// Initial update
updatePositions();

// Update positions on scroll
window.addEventListener('scroll', () => {
    const scrollingImages = document.querySelector('.scrolling-images');
    const scrollPosition = window.scrollY;
    // Get the bounding rectangle of scrolling-images
    const scrollingImagesRect = scrollingImages.getBoundingClientRect();

    // Calculate the offset between the top of the page and the top of scrolling images
    const scrollingImagesOffset = scrollingImagesRect.top + scrollPosition;

    // Calculate the position of scrolling images relative to the top of the page
    const scrollingImagesPosition = scrollingImagesOffset + scrollingImagesRect.height;

      if (scrollPosition<= scrollingImagesPosition){
          updatePositions();
      }

});


// Update positions on window resize
window.addEventListener('resize', () => {
    const scrollPosition = window.scrollY;
    const scrollingImages = document.querySelector('.scrolling-images');

    const scrollingImagesRect = scrollingImages.getBoundingClientRect();

    // Calculate the offset between the top of the page and the top of scrolling images
    const scrollingImagesOffset = scrollingImagesRect.top + scrollPosition;

    // Calculate the position of scrolling images relative to the top of the page
    const scrollingImagesPosition = scrollingImagesOffset + scrollingImagesRect.height;
    // Calculate the resizing factor based on the change in window width
    const resizingFactor = window.innerWidth / lastWindowWidth;
    if (scrollPosition<= scrollingImagesPosition){

    const clouds = document.querySelectorAll(".cloud");
    const plane =  document.querySelector(".plane");

    const planeLeft = parseFloat(window.getComputedStyle(plane).left);
    const newLeft = planeLeft * resizingFactor;
    plane.style.left = `${newLeft}px`;

    // Update cloud positions based on the resizing factor
    clouds.forEach(cloud => {
        const cloudRight = parseFloat(window.getComputedStyle(cloud).right);
        const newRight = cloudRight * resizingFactor;
        cloud.style.right = `${newRight}px`;
    });

    // Update the last window width
    lastWindowWidth = window.innerWidth;
} else {

    // Calculate the target percentage distances for the plane and clouds once they are in view
    const desiredPlaneLeftPercent = 20;
    const cloud1RightPercentInView = 75;
    const cloud2RightPercentInView = 10;
    const cloud3RightPercentInView = 35;

    const clouds = document.querySelectorAll(".cloud");
    const plane =  document.querySelector(".plane");

    // Convert pixel values to percentages for clouds and plane
    // Convert desired percentage to pixels
    const desiredPlaneLeftPx = (desiredPlaneLeftPercent / 100) * window.innerWidth;

    // Calculate the plane's new position based on the desired percentage and window height
    plane.style.left = `${desiredPlaneLeftPx + (scrollingImagesRect.height)}px`;

    clouds.forEach(cloud => {
        const cloudRightPercent = (parseFloat(window.getComputedStyle(cloud).right) / window.innerWidth) * 100;
        let desiredCloudRightPx;
        switch (cloud.className) {
            case 'cloud cloud1':
                desiredCloudRightPx = (cloud1RightPercentInView/100) * window.innerWidth;
                break;
            case 'cloud cloud2':
                desiredCloudRightPx = (cloud2RightPercentInView/100) * window.innerWidth;
                break;
            case 'cloud cloud3':
                desiredCloudRightPx = (cloud3RightPercentInView/100) * window.innerWidth;
                break;
            default:
                break;
        }

        cloud.style.right = `${desiredCloudRightPx-(scrollingImagesRect.height/2)}px`;
    });

}
});

//-------------THE BIG DAY DETAILS---------------------
// Add event listeners for the wedding timeline section
document.addEventListener('DOMContentLoaded', function() {
    const weddingTimeline = document.querySelectorAll('.timeline-item');

    weddingTimeline.forEach(event => {
        event.addEventListener('click', function() {
            // Toggle visibility of event details on click
            this.classList.toggle('active');
        });
    });
});

//---------------STICKY MENU----------------------------
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
      let offsetTop = 0;
      if (targetId == "faq"){
         offsetTop = targetSection.offsetTop-targetSection.offsetHeight; // Get the offset from the top of the document to the target section
      } else{
         offsetTop = targetSection.offsetTop; // Get the offset from the top of the document to the target section
      }

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
        if (scrolledPercentage >= 35 && scrolledPercentage <= 60) {
            rsvpButton.classList.add("sticky", "fadeIn");
            rsvpButton.classList.remove("fadeOut");
        } else {
            rsvpButton.classList.remove("sticky","fadeIn");
            rsvpButton.classList.add("fadeOut");
        }
    });
});

        // Function to lazy load the iframe when it's in the viewport
        function lazyLoadIframe() {
            var iframe = document.getElementById('lazy-iframe');
            var iframeSrc = iframe.getAttribute('data-src');
            if (iframeSrc && !iframe.getAttribute('src')) {
                iframe.setAttribute('src', iframeSrc);
            }
        }

        // Function to check if the iframe is in the viewport
        function isIframeInViewport() {
            var rect = document.getElementById('iframe-container').getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Event listener to lazy load the iframe when it's scrolled into view
        window.addEventListener('scroll', function() {
            if (isIframeInViewport()) {
                lazyLoadIframe();
                // Remove the scroll listener once the iframe is loaded
                window.removeEventListener('scroll', arguments.callee);
            }
        });
//------------Sections--------------
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section, .faq-container');


    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const sectionHeight = section.clientHeight;

        // Calculate the percentage of the section visible in the window
        const visiblePercentage = (Math.min(sectionBottom, windowHeight) - Math.max(sectionTop, 0)) / sectionHeight;

        // Add fadeIn class when a certain percentage of the section is visible
        if (visiblePercentage >= 0.05) {
            section.classList.add('fadeIn');
            section.classList.remove('fadeOut'); // Remove fadeOut class if present
        } else {
            section.classList.remove('fadeIn'); // Remove fadeIn class if present
            section.classList.add('fadeOut');
        }
    });
});



//---------Cookies--------------
// Clear all cookies
document.cookie.split(";").forEach(function(c) { 
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
});