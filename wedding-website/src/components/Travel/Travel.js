import { useEffect, useState } from 'react';

import '../../App.css';
import './Travel.css';

import compass from '../../assets/compass.png';

function Travel() {
  // State to detect if the screen is mobile or not
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screens or screen size 500px
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768 || window.innerWidth <= 500); // Adjust the width as needed
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener to check on window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    // Lazy Load Iframe
    function lazyLoadIframe() {
      const iframe = document.getElementById('lazy-iframe');
      const iframeSrc = iframe.getAttribute('data-src');
      if (iframeSrc && !iframe.getAttribute('src')) {
        iframe.setAttribute('src', iframeSrc);
      }
    }

    function isIframeInViewport() {
      // Only run on non-mobile devices
      if (isMobile) return;

      const iframe = document.getElementById('lazy-iframe');
      const rect = iframe.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (isIframeInViewport()) {
        lazyLoadIframe();
        window.removeEventListener('scroll', handleScroll);
      }
    }

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    // Travel section
    <section id="travel" className="section">
      <h2>Travel</h2>
      {/* Render button for Apple Map only on mobile */}
      {isMobile && (
        <div id="button-container">
          <a
            href="https://www.google.com/maps/d/embed?mid=1HUF2J3IGmn0srTxZNXmde02nqv3njo0&ehbc=2E312F&noprof=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={compass}
              alt="Open Apple Guide"
              style={{ width: '100px', height: 'auto' }} // Adjust dimensions as needed
            />
          </a>
        </div>
      )}
      <div className="row-col-box" id="Travel">
        {/* Render div class "a" only for non-mobile devices */}
        {!isMobile && (
          <div className="a">
            {/* iframe for non-mobile */}
            <div id="iframe-container">
              {/* Placeholder content while iframe is loading */}
              <div>Loading...</div>
              {/* Actual iframe with data-src attribute */}
              <iframe
                id="lazy-iframe"
                title="wedding my-map"
                data-src="https://www.google.com/maps/d/embed?mid=1HUF2J3IGmn0srTxZNXmde02nqv3njo0&ehbc=2E312F&noprof=1"
                width="1280"
                height="480"
              ></iframe>
            </div>
          </div>
        )}

        <div className="b">
          {/* Additional content */}
          <h1>explore our map!</h1>
          <p>
            In addition to being a one-stop shop for our wedding event locations, use the map to find all the best places to <b>visit</b>  and <b>recommended accommodations</b>. Click on the icons to discover attractions, dining spots, and more!
          </p>
          <p>
            Sharon’s Recommendations: Experience the best of the coastal food scene with savory delights like clam chowder in a sourdough bread bowl. Explore the fascinating exhibits at the Monterey Bay Aquarium, renowned for its stunning marine life and immersive experiences. Enjoy charming coffee shops and don't miss the scenic beauty of nearby Point Lobos State Natural Reserve, perfect for hiking and soaking in breathtaking ocean views, we recommend a hike towards Cypress Grove!
          </p>
          <p>
            Brandon’s Recommendations: Delight in adventurous culinary experiences with spicy dishes. Discover unique boutiques and art galleries that showcase the town's artistic vibe. For fun activities, explore scenic hiking trails and relax at the beautiful Carmel Beach, or grab some boba tea to cool off after a day of shopping and exploration!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Travel;
