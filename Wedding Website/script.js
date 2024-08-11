// ------------ CLOUD and PLANE Animation -------------------
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
        cloud.style.right = `${cloudRight - deltaY * 0.5}px`; // Adjust the speed of cloud movement if needed
    });

    lastScrollY = window.scrollY;
    lastWindowWidth = windowWidth;
}

// Update positions on scroll
window.addEventListener('scroll', () => {
    const scrollingImages = document.querySelector('.scrolling-images');
    const scrollPosition = window.scrollY;
    const scrollingImagesRect = scrollingImages.getBoundingClientRect();
    const scrollingImagesOffset = scrollingImagesRect.top + scrollPosition;
    const scrollingImagesPosition = scrollingImagesOffset + scrollingImagesRect.height;

    if (scrollPosition <= scrollingImagesPosition) {
        updatePositions();
    } else {
        updatePositionsResize();
    }
});

function updatePositionsResize() {
    const scrollingImages = document.querySelector('.scrolling-images');
    const scrollingImagesRect = scrollingImages.getBoundingClientRect();

    const desiredPlaneLeftPercent = 20;
    const cloud1RightPercentInView = 67;
    const cloud2RightPercentInView = 45;
    const cloud3RightPercentInView = 12;

    const plane = document.querySelector(".plane");
    const clouds = document.querySelectorAll(".cloud");

    const desiredPlaneLeftPx = (desiredPlaneLeftPercent / 100) * window.innerWidth;
    plane.style.left = `${desiredPlaneLeftPx + scrollingImagesRect.height}px`;

    clouds.forEach(cloud => {
        let desiredCloudRightPx;
        switch (cloud.className) {
            case 'cloud cloud1':
                desiredCloudRightPx = (cloud1RightPercentInView / 100) * window.innerWidth;
                break;
            case 'cloud cloud2':
                desiredCloudRightPx = (cloud2RightPercentInView / 100) * window.innerWidth;
                break;
            case 'cloud cloud3':
                desiredCloudRightPx = (cloud3RightPercentInView / 100) * window.innerWidth;
                break;
        }
        cloud.style.right = `${desiredCloudRightPx - (scrollingImagesRect.height / 2)}px`;
    });
}

// Update positions on window resize
window.addEventListener('resize', () => {
    const scrollPosition = window.scrollY;
    const scrollingImages = document.querySelector('.scrolling-images');
    const scrollingImagesRect = scrollingImages.getBoundingClientRect();
    const scrollingImagesOffset = scrollingImagesRect.top + scrollPosition;
    const scrollingImagesPosition = scrollingImagesOffset + scrollingImagesRect.height;
    const resizingFactor = window.innerWidth / lastWindowWidth;
    lastWindowWidth = window.innerWidth;

    if (scrollPosition <= scrollingImagesPosition) {
        const plane = document.querySelector(".plane");
        const clouds = document.querySelectorAll(".cloud");

        const planeLeft = parseFloat(window.getComputedStyle(plane).left);
        plane.style.left = `${planeLeft * resizingFactor}px`;

        clouds.forEach(cloud => {
            const cloudRight = parseFloat(window.getComputedStyle(cloud).right);
            cloud.style.right = `${cloudRight * resizingFactor}px`;
        });
    } else {
        updatePositionsResize();
    }
});

// RSVP Button
const rsvpButton = document.getElementById('rsvpButton');
const rsvpButtonImg = document.getElementById('rsvp-button-img');

rsvpButton.addEventListener('mouseover', () => {
    rsvpButtonImg.src = 'assets/RSVP-black.avif';
});

rsvpButton.addEventListener('mouseout', () => {
    rsvpButtonImg.src = 'assets/RSVP.avif';
});

// THE BIG DAY DETAILS
document.addEventListener('DOMContentLoaded', function() {
    const weddingTimeline = document.querySelectorAll('.timeline-item');
    weddingTimeline.forEach(event => {
        event.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

// STICKY MENU
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
            document.querySelector(`nav ul li a[href="#${id}"]`).classList.add('active');
        }
    });
});

// FAQ Section Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item, index) => {
    console.log('Attaching event listener to FAQ item', index);
    item.addEventListener('click', function() {
        const answer = this.querySelector('.answer');
        const toggle = this.querySelector('.toggle');

        const isActive = answer.style.display === 'block';

        answer.style.display = isActive ? 'none' : 'block';
        toggle.textContent = isActive ? '+' : '-';

    });
});

// FAQ Section Scroll
document.addEventListener("scroll", function() {
    const faqSection = document.getElementById("faq");
    const imageSection = document.getElementById("image2");
    const imageHeight = imageSection.offsetHeight;
    const scrollY = window.scrollY;

    let translateY = 0;
    if (scrollY > imageSection.offsetTop) {
        let scrollProgress = (scrollY - imageSection.offsetTop) / (imageHeight / 2);
        translateY = Math.min(50, Math.max(0, scrollProgress * 45));
    }

    faqSection.style.transform = `translateY(-${translateY}%)`;
});

// Sticky Menu Show/Hide
let timeout;
const header = document.getElementById('header');
const menu = document.getElementById('menu');

function showMenu() {
    header.classList.remove('hidden');
    clearTimeout(timeout);
    header.classList.add('fadeIn');
    header.classList.remove('fadeOut');
}

function hideMenu() {
    header.classList.remove('hidden');
    timeout = setTimeout(() => {
        header.classList.remove('fadeIn');
        header.classList.add('fadeOut');
    }, 600);
}

function updateHeaderPosition() {
    showMenu();
    hideMenu();
}

menu.addEventListener('mouseover', showMenu);
menu.addEventListener('mouseleave', hideMenu);
window.addEventListener('scroll', updateHeaderPosition);

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        let offsetTop = targetId === "faq" ? targetSection.offsetTop - targetSection.offsetHeight : targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// RSVP Button Visibility on Scroll
document.addEventListener("DOMContentLoaded", function() {
    const rsvpButton = document.getElementById("rsvpButton");
    const image = document.querySelector(".background-image");
    const imageHeight = image.clientHeight;

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const scrolledPercentage = (scrollPosition / imageHeight) * 100;

        if (scrolledPercentage >= 35 && scrolledPercentage <= 60) {
            rsvpButton.classList.add("sticky", "fadeIn");
            rsvpButton.classList.remove("fadeOut");
        } else {
            rsvpButton.classList.remove("sticky", "fadeIn");
            rsvpButton.classList.add("fadeOut");
        }
    });
});
document.getElementById('rsvpButton').addEventListener('click', function() {
    window.location.href = "subpages/rsvp.html"; // Redirects to the RSVP redirect page
});

// Lazy Load Iframe
function lazyLoadIframe() {
    var iframe = document.getElementById('lazy-iframe');
    var iframeSrc = iframe.getAttribute('data-src');
    if (iframeSrc && !iframe.getAttribute('src')) {
        iframe.setAttribute('src', iframeSrc);
    }
}

function isIframeInViewport() {
    var rect = document.getElementById('iframe-container').getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function() {
    if (isIframeInViewport()) {
        lazyLoadIframe();
        window.removeEventListener('scroll', arguments.callee);
    }
});

// Fade In Sections on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section, .faq-container, .rsvp-button, .rsvpButton');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const sectionHeight = section.clientHeight;

        const visiblePercentage = (Math.min(sectionBottom, windowHeight) - Math.max(sectionTop, 0)) / sectionHeight;

        if (visiblePercentage >= 0.01) {
            section.classList.add('fadeIn');
            section.classList.remove('fadeOut');
        } else {
            section.classList.remove('fadeIn');
            section.classList.add('fadeOut');
        }
    });
});


  