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
            ></iframe>
          </div>
        </div>
        <div className="b">
          {/* Additional content */}
        </div>
      </div>
    </section>
  );
}

export default Travel;
