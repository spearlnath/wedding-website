import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../App.css';
import './Home.css';

import landing from '../../assets/engagement photos/IMG_0982 2.avif';
import landingloqual from '../../assets/engagement photos/IMG_0982 2loqual.avif';
import rsvp from '../../assets/RSVP.avif';
import rsvp_black from '../../assets/RSVP-black.avif';
import plane from '../../assets/Airplane_Sketch.avif';
import cloud1 from '../../assets/Cloud_2.avif';
import cloud2 from '../../assets/Cloud_1.avif';
import cloud3 from '../../assets/Cloud_3.avif';

function Home() {
  const navigate = useNavigate();
  const [isHighQualityLoaded, setIsHighQualityLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = landing;
    img.onload = () => setIsHighQualityLoaded(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const plane = document.querySelector('.plane');
      const clouds = document.querySelectorAll('.cloud');

      const rsvpButton = document.getElementById('rsvpButton');
      const image = document.querySelector('.background-image');
      const imageHeight = image.clientHeight;

      if (plane) {
        plane.style.transform = `translateX(${scrollPosition * 0.5}px)`;
      }

      clouds.forEach((cloud, index) => {
        const speed = (index + 1) * 0.2;
        cloud.style.transform = `translateX(${scrollPosition * speed}px)`;
      });

      const scrolledPercentage = (scrollPosition / imageHeight) * 100;

      if (scrolledPercentage >= 20 && scrolledPercentage <= 70) {
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
  // RSVP Button hover effect
  const rsvpButtonImg = document.getElementById('rsvp-button-img');
  if (rsvpButtonImg) {
    document.getElementById('rsvpButton').addEventListener('mouseover', () => {
      rsvpButtonImg.src = rsvp_black;
    });
    document.getElementById('rsvpButton').addEventListener('mouseout', () => {
      rsvpButtonImg.src = rsvp;
    });
  }

  const handleRSVPClick = () => {
    navigate('/rsvp');
  };

  return (
    <section id="home" className="fullscreen-section">
      <img 
        src={isHighQualityLoaded ? landing : landingloqual} 
        className="background-image" 
        alt="Wedding" 
        style={{ opacity: isHighQualityLoaded ? 1 : .9 }}
      />
      
      {isHighQualityLoaded && (
        <>
          <button id="rsvpButton" className="rsvp-button">
            <img src={rsvp} id="rsvp-button-img" width = "480" height = "360"alt="RSVP Button" onClick={handleRSVPClick} />
          </button>

          <div className="overlay-text">
            <div className="angled-text-container">
              <div className="angled-letter">S</div>
              <div className="angled-letter">h</div>
              <div className="angled-letter-a">a</div>
              <div className="angled-letter-r">r</div>
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

          <div className="scrolling-images">
            <img src={plane} className="plane" width="242" height="146" alt="Plane" />
            <img src={cloud1} className="cloud cloud1" width="237" height="143" alt="Cloud" />
            <img src={cloud2} className="cloud cloud2" width="237" height="160" alt="Cloud" />
            <img src={cloud3} className="cloud cloud3" width="237" height="134" alt="Cloud" />
          </div>
        </>
      )}

      <section id="rsvp" className="section"></section>
    </section>
  );
}

export default Home;