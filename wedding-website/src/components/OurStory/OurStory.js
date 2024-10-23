// src/components/Travel.js

import '../../App.css';
import '../Home/Home.css';

import './OurStory.css';

import landing from '../../assets/Our Story/IMG_8605.JPG';
import { useEffect } from 'react';
import map from '../../assets/map.svg'
function OurStory() {

    useEffect(() => {
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
            {/* <!-- OurStory Section --> */}
            <section id="OurStory" class="fullscreen-section">
                <img src={landing} class="background-image" alt="OurStory" />
                
                <div class="overlay-text" id="ourstory">
                    <div class="angled-text-container">
                        <div class="angled-letter">O</div>
                        <div class="angled-letter">u</div>
                        <div class="angled-letter">r&nbsp;</div>
                        <div class="angled-letter">S</div>
                        <div class="angled-letter">t</div>
                        <div class="angled-letter">o</div>
                        <div class="angled-letter">r</div>
                        <div class="angled-letter">y</div>
\
                    </div>
                    <p class="wedding-date" id="ourstory-tag"> it all started...</p>
                    <p className="wedding-date" id="ourstory-location">College Station, TX, USA</p>
                </div>
            </section>
        
            {/* <!-- OurStory Details Section --> */}
            <section id="OurStory-details" class="section">
                <h2>Our Story Begins</h2>
                <div class="row-col-box ourstoryformat">
                    <div class="a">
                        <p>&emsp;Our journey began as college sweethearts at Texas A&M both pursuing our dream careers — he in industrial engineering and I in mechanical engineering. We crossed paths in a student organization and later competed fiercely as team leads in an international research competition. What started as a professional rivalry (perhaps one-sided on my part) quickly turned into a deep connection, and we fell in love amidst the challenges and excitement of our studies.<br /><br />

                        &emsp; As our relationship blossomed, we faced the trials of long-distance love, juggling co-ops and internships across different states. When COVID-19 hit, we adapted, bringing a little joy into our lives with a new puppy to keep us company during the lockdowns. Despite the hurdles, we persevered, graduated together, and looked forward to the next chapter of our lives.<br /><br />

                        &emsp;Graduation marked the beginning of a new adventure, as we embraced the demands of our respective careers. He ventured to Silicon Valley, diving into the tech world, while I reached for the stars with a job working on the International Space Station. Though we are separated by miles, our bond remains unbreakable, and we continue to support each other as we navigate the complexities of adulthood and the pursuit of our dreams.<br /><br />

                        &emsp; We’re over the over moon to celebrate our love story with all of you in beautiful Carmel, California! </p>
                    </div>
                    <div class="b">
                        {/* <!-- Additional content or images can go here --> */}
                        <img src = {map} class="hi" alt="our story map" />
                    </div>
                </div>
            </section>
        </div>
        
    );

}

export default OurStory;
