// src/components/Travel.js
import { useEffect } from 'react';

import '../../App.css';
import './Travel.css';

function Travel() {

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Travel section
    <section id="travel" className="section">
      <h2>Travel</h2>
      <div className="row-col-box">
        <div className="a">
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
              allowFullScreen
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div className="b" >
          
          {/* Additional content */}
          <h1>explore our map!</h1>
          <p>In addition to being a one-stop shop for our wedding event locations, use the map to find all the best places to visit. Click on the icons to discover attractions, dining spots, and more!</p>
          <p>
            Sharon’s Recommendations for Monterey: Experience the best of the coastal food scene with savory delights like clam chowder in a sourdough bread bowl and fresh seafood at Cannery Row. Explore the fascinating exhibits at the Monterey Bay Aquarium, renowned for its stunning marine life and immersive experiences. Enjoy charming coffee shops and don't miss the scenic beauty of nearby Point Lobos State Natural Reserve, perfect for hiking and soaking in breathtaking ocean views!
          </p>
          <p>
            Brandon’s Recommendations for Carmel-by-the-Sea: Delight in adventurous culinary experiences with spicy dishes and local favorites like artichoke soup. Discover unique boutiques and art galleries that showcase the town's artistic vibe. For fun activities, explore scenic hiking trails and relax at the beautiful Carmel Beach, or grab some boba tea to cool off after a day of shopping and exploration!
          </p>

        </div>
      </div>
    </section>
  );
}

export default Travel;
