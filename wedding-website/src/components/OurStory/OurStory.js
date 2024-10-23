// src/components/Travel.js

import '../../App.css';
import '../Home/Home.css';

import './OurStory.css';

import landing from '../../assets/Our Story/IMG_8605.JPG';
import { useEffect } from 'react';
import map from '../../assets/map.svg'

import  img4 from '../../assets/Our Story/ourstory_gal/img7.avif';
import img19 from '../../assets/Our Story/ourstory_gal/img5.avif';
import img23 from '../../assets/Our Story/ourstory_gal/img45.avif';
import img35 from '../../assets/Our Story/ourstory_gal/img6.avif';
import  img8 from '../../assets/Our Story/ourstory_gal/img4.avif';
import img42 from '../../assets/Our Story/ourstory_gal/img17.avif';
import img15 from '../../assets/Our Story/ourstory_gal/img20.avif';
import img39 from '../../assets/Our Story/ourstory_gal/img22.avif';
import img38 from '../../assets/Our Story/ourstory_gal/img24.avif';
import img14 from '../../assets/Our Story/ourstory_gal/img52.avif';
import img9  from '../../assets/Our Story/ourstory_gal/img12.avif';
import img43 from '../../assets/Our Story/ourstory_gal/img29.avif';
import img34 from '../../assets/Our Story/ourstory_gal/img33.avif';
import img22 from '../../assets/Our Story/ourstory_gal/img48.avif';
import img18 from '../../assets/Our Story/ourstory_gal/img49.avif';
import  img5 from '../../assets/Our Story/ourstory_gal/img50.avif';
import img44 from '../../assets/Our Story/ourstory_gal/img3.avif';
import img13 from '../../assets/Our Story/ourstory_gal/img27.avif';
import img52 from '../../assets/Our Story/ourstory_gal/img31.avif';
import img29 from '../../assets/Our Story/ourstory_gal/img34.avif';
import  img2 from '../../assets/Our Story/ourstory_gal/img36.avif';
import img48 from '../../assets/Our Story/ourstory_gal/img41.avif';
import img25 from '../../assets/Our Story/ourstory_gal/img19.avif';
import img33 from '../../assets/Our Story/ourstory_gal/img47.avif';
import img32 from '../../assets/Our Story/ourstory_gal/img1.avif';
import img24 from '../../assets/Our Story/ourstory_gal/img2.avif';
import  img3 from '../../assets/Our Story/ourstory_gal/img18.avif';
import img49 from '../../assets/Our Story/ourstory_gal/img23.avif';
import img28 from '../../assets/Our Story/ourstory_gal/img8.avif';


import Masonry from 'react-masonry-css';


const ourStoryImages = [ img4, img19, img23, img35,  img8, img42, img15, 
                         img39, img38, img14, img9 , img43, img34, img22, 
                         img18,  img5, img44, img13, img52, img29,  img2, 
                         img48, img25, img33, img32, img24,  img3, img49, 
                         img28 ];

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
    // Define breakpoints for responsive masonry layout
    const breakpointColumnsObj = {
        default: 4, // Default number of columns
        1100: 3,    // Adjust number of columns based on screen size
        700: 2,
        500: 1,
        };
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
            {/* Proposal Photos Section with Masonry Layout */}
            <section id="history" className="section">
                <h2>Our Story Gallery</h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {ourStoryImages.map((image, index) => (
                        <img key={index} src={image} alt={`OurStory ${index}`} className="masonry-item" />
                    ))}
                </Masonry>
            </section>
        </div>
        
    );

}

export default OurStory;
