// src/components/Home.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../App.css';
import './Home.css';

import landing from '../../assets/engagement photos/IMG_0982 2.avif';
import rsvp from '../../assets/RSVP.avif';
// import rsvp_black from '../../assets/RSVP-black.avif'
import plane from '../../assets/Airplane_Sketch.avif';
import cloud1 from '../../assets/Cloud_2.avif';
import cloud2 from '../../assets/Cloud_1.avif';
import cloud3 from '../../assets/Cloud_3.avif';

function Home() {

 
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const plane = document.querySelector('.plane');
      const clouds = document.querySelectorAll('.cloud');

      const rsvpButton = document.getElementById('rsvpButton');
      const image = document.querySelector('.background-image');
      const imageHeight = image.clientHeight;

      // Move the plane to the right based on scroll position
      if (plane) {
        plane.style.transform = `translateX(${scrollPosition * 0.5}px)`; // Adjust the multiplier for speed
      }

      // Move the clouds to the right based on scroll position
      clouds.forEach((cloud, index) => {
        const speed = (index + 1) * 0.2; // Adjust the multiplier for different speeds
        cloud.style.transform = `translateX(${scrollPosition * speed}px)`;
      });

      // Calculate the scroll percentage
      const scrolledPercentage = (scrollPosition / imageHeight) * 100;

      // Show or hide the RSVP button based on scroll percentage
      if (scrolledPercentage >= 35 && scrolledPercentage <= 70) {
        rsvpButton.classList.add('sticky', 'fadeIn');
        rsvpButton.classList.remove('fadeOut');
      } else {
        rsvpButton.classList.remove('sticky', 'fadeIn');
        rsvpButton.classList.add('fadeOut');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleRSVPClick = () => {
    console.log('RSVP button clicked');
    navigate('/rsvp'); // Navigate to the RSVP page
  }

  return (
    <section id="home" className="fullscreen-section">
      <img src={landing} className="background-image" alt="Wedding" />
      
      {/* RSVP button */}
      <button id="rsvpButton" className="rsvp-button">
        <img src={rsvp} id="rsvp-button-img" alt="RSVP Button" onClick={handleRSVPClick} />
      </button>
      
      {/* Overlay text */}
      <div className="overlay-text">
        <div className="angled-text-container">
          <div className="angled-letter">S</div>
          <div className="angled-letter">h</div>
          <div className="angled-letter">a</div>
          <div className="angled-letter">r</div>
          <div className="angled-letter">o</div>
          <div className="angled-letter">n</div>
          <div className="angled-letter">&nbsp;</div>
          <br />
          <div className="angled-letter">&amp;</div>
          <br />
          <div className="angled-letter">&nbsp;</div>
          <div className="angled-letter">B</div>
          <div className="angled-letter">r</div>
          <div className="angled-letter">a</div>
          <div className="angled-letter">n</div>
          <div className="angled-letter">d</div>
          <div className="angled-letter">o</div>
          <div className="angled-letter">n</div>
        </div>
        <p className="wedding-date">July 10, 2025</p>
        <p className="wedding-date">Carmel-by-the-Sea, CA, USA</p>
      </div>

      {/* Scrolling images */}
      <div className="scrolling-images">
        <img src={plane} className="plane" alt="Plane" />
        <img src={cloud1} className="cloud cloud1" alt="Cloud" />
        <img src={cloud2} className="cloud cloud2" alt="Cloud" />
        <img src={cloud3} className="cloud cloud3" alt="Cloud" />
      </div>

      <section id="rsvp" className="section"></section>
    </section>
  );
}

export default Home;
