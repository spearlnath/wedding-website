// src/components/Travel.js

import '../../App.css';
import '../Home/Home.css';
import './Engagement.css';

import landing from '../../assets/engagement photos/IMG_1878-Enhanced-NR.avif';
import landingloqual from '../../assets/engagement photos/IMG_1878-Enhanced-NR loqual.avif';

import img22 from '../../assets/engagement photos/engage_gal/img22.avif';
import img23 from '../../assets/engagement photos/engage_gal/img23.avif';
import img20 from '../../assets/engagement photos/engage_gal/img20.avif';
import img24 from '../../assets/engagement photos/engage_gal/img24.avif';
import img18 from '../../assets/engagement photos/engage_gal/img18.avif';
import img19 from '../../assets/engagement photos/engage_gal/img19.avif';
import img27 from '../../assets/engagement photos/engage_gal/img27.avif';
import img26 from '../../assets/engagement photos/engage_gal/img26.avif';
import  img9 from  '../../assets/engagement photos/engage_gal/img9.avif';
import  img8 from  '../../assets/engagement photos/engage_gal/img8.avif';
import  img5 from  '../../assets/engagement photos/engage_gal/img5.avif';
import  img4 from  '../../assets/engagement photos/engage_gal/img4.avif';
import  img6 from  '../../assets/engagement photos/engage_gal/img6.avif';
import  img7 from  '../../assets/engagement photos/engage_gal/img7.avif';
import  img3 from  '../../assets/engagement photos/engage_gal/img3.avif';
import  img2 from  '../../assets/engagement photos/engage_gal/img2.avif';
import img14 from '../../assets/engagement photos/engage_gal/img14.avif';
import img15 from '../../assets/engagement photos/engage_gal/img15.avif';
import img11 from '../../assets/engagement photos/engage_gal/img11.avif';
import img10 from '../../assets/engagement photos/engage_gal/img10.avif';
import img12 from '../../assets/engagement photos/engage_gal/img12.avif';
import img13 from '../../assets/engagement photos/engage_gal/img13.avif';
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
const engageImages = [img22, img23, img14, img13,
                      img18, img24, img19, img2,
                      img10, img11, img27, img26, 
                      img9,  img8,  img5,  img4, 
                      img15 ,  img7, img12, img20, img3, img6
                       ];
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
    // Define breakpoints for responsive masonry layout
    const breakpointColumnsObj = {
       default: 3, // Default number of columns
       1100: 3,    // Adjust number of columns based on screen size
       700: 4,
       500: 3,
       };
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
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {engageImages.map((image, index) => (
                        <img key={index} src={image} alt={`Engage ${index}`} className="masonry-item" />
                    ))}
                </Masonry>
            </section>
        
        </div>
        
    );

}

export default Engagement;
