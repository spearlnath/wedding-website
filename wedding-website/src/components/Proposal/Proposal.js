// src/components/Travel.js

import '../../App.css';
import '../Home/Home.css';
import './Proposal.css';

import landing from '../../assets/proposal photos/WeddingWebsiteLanding.avif';

import { useEffect } from 'react';

function Proposal() {
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
            {/* <!-- Proposal Section --> */}
            <section id="Proposal" class="fullscreen-section">
                <img src={landing} class="background-image" alt="Proposal" />
                
                <div class="overlay-text">
                    <div class="angled-text-container">
                        <div class="angled-letter">P</div>
                        <div class="angled-letter">r</div>
                        <div class="angled-letter">o</div>
                        <div class="angled-letter">p</div>
                        <div class="angled-letter">o</div>
                        <div class="angled-letter">s</div>
                        <div class="angled-letter">a</div>
                        <div class="angled-letter">l</div>
                    </div>
                    <p class="wedding-date">Our Special Moment</p>
                    <p className="wedding-date">Chicago, IL, USA</p>
                </div>
            </section>
        
            {/* <!-- Proposal Details Section --> */}
            <section id="proposal-details" class="section">
                <h2>Proposal Details</h2>
                <div class="row-col-box">
                    <div class="a">
                        <p>Here, you can share the story of your Proposal or include pictures from the event.</p>
                    </div>
                    <div class="b">
                        {/* <!-- Additional content or images can go here --> */}
                    </div>
                </div>
            </section>
        
            {/* <!-- Proposal Photos Section --> */}
            <section id="Proposal-photos" class="section">
                <h2>Proposal Photos</h2>
                <div class="embed" data-embed-app="../assets/Proposal photos/grid/index.php" ></div>
            </section>
        </div>
        
    );

}

export default Proposal;
