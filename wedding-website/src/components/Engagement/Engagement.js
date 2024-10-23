// src/components/Travel.js

import '../../App.css';
import '../Home/Home.css';
import './Engagement.css';

import landing from '../../assets/engagement photos/IMG_1878-Enhanced-NR.avif';
import landingloqual from '../../assets/engagement photos/IMG_1878-Enhanced-NR loqual.avif';

import { useEffect, useState } from 'react';

function Engagement() {
    const [isHighQualityLoaded, setIsHighQualityLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = landing;
        img.onload = () => setIsHighQualityLoaded(true);
        // Scroll to top of the page when the component mounts
        window.scrollTo(0, 0);

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
                <img src={isHighQualityLoaded ? landing : landingloqual}  class="background-image" alt="Engagement" />
                {isHighQualityLoaded && (
                <div class="overlay-text" id="engagement-text">
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
                    <p class="wedding-date" id="engagement-text1">To new beginnings...</p>
                    <p className="wedding-date" id="engagement-text1">Whale Peak & Rocky Point, CA, USA</p>
                </div>)}
            </section>
        
            {/* <!-- Engagement Details Section --> */}
            <section id="engagement-details" class="section">
                <h2>Engagement Photos</h2>
                <div class="row-col-box">
                    <div class="a">
                        <p>Photos taken at</p>
                    </div>
                    <div class="b">
                        {/* <!-- Additional content or images can go here --> */}
                    </div>
                </div>
            </section>
        
        </div>
        
    );

}

export default Engagement;
