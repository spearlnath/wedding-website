// src/components/Travel.js

import '../../App.css';
import '../Home/Home.css';
import './Engagement.css';

import landing from '../../assets/engagement photos/IMG_1878-Enhanced-NR.avif';

import { useEffect } from 'react';

function Engagement() {
    useEffect(() => {
        // Scroll to top of the page when the component mounts
        const scrollToTop = () => {
            const scrollStep = -window.scrollY / (700 / 15); // Change 500 to adjust the scroll duration
            const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15); // Change 15 to adjust the scroll speed
        };

        scrollToTop();
``
        // Smoothly scroll to the specific section if a hash is present in the URL
        const hash = window.location.hash;
        if (hash) {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }, 300); // Delay to ensure the page has scrolled to the top first
            }
        }
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    return (
        <div>
            {/* <!-- Engagement Section --> */}
            <section id="engagement" class="fullscreen-section">
                <img src={landing} class="background-image" alt="Engagement" />
                
                <div class="overlay-text">
                    <div class="angled-text-container">
                        <div class="angled-letter">E</div>
                        <div class="angled-letter">n</div>
                        <div class="angled-letter">g</div>
                        <div class="angled-letter">a</div>
                        <div class="angled-letter">g</div>
                        <div class="angled-letter">e</div>
                        <div class="angled-letter">m</div>
                        <div class="angled-letter">e</div>
                        <div class="angled-letter">n</div>
                        <div class="angled-letter">t</div>
                    </div>
                    <p class="wedding-date">To new beginnings...</p>
                    <p className="wedding-date">Whale Peak & Rocky Point, CA, USA</p>
                </div>
            </section>
        
            {/* <!-- Engagement Details Section --> */}
            <section id="engagement-details" class="section">
                <h2>Engagement Details</h2>
                <div class="row-col-box">
                    <div class="a">
                        <p>Here, you can share the story of your engagement or include pictures from the event.</p>
                    </div>
                    <div class="b">
                        {/* <!-- Additional content or images can go here --> */}
                    </div>
                </div>
            </section>
        
            {/* <!-- Engagement Photos Section --> */}
            <section id="engagement-photos" class="section">
                <h2>Engagement Photos</h2>
                <div class="embed" data-embed-app="../assets/engagement photos/grid/index.php" ></div>
            </section>
        </div>
        
    );

}

export default Engagement;
