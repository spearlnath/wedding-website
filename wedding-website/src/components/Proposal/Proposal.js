// src/components/Proposal.js

import '../../App.css';
import '../Home/Home.css';
import '../BigDay/BigDay.css';
import './Proposal.css';

import landing from '../../assets/proposal photos/WeddingWebsiteLanding.avif';
import landingloqual from '../../assets/proposal photos/Proposal_Full_loqual.avif';

import nc2018 from '../../assets/proposal photos/nc2018.avif';
import nc2018recreate from '../../assets/proposal photos/recreate.avif';
import proposal from '../../assets/proposal photos/proposal.avif';
import kasama from '../../assets/proposal photos/kasama.avif';
import fieldmuseum from '../../assets/proposal photos/fieldmuseum.avif';
import bavetts from '../../assets/proposal photos/Bavetts.avif';

import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

// Import images from proposal_gal folder
import img9306 from '../../assets/proposal photos/proposal_gal/IMG_9306.jpeg';
import img5105 from '../../assets/proposal photos/proposal_gal/IMG_5105.jpeg';
import img5144 from '../../assets/proposal photos/proposal_gal/IMG_5144.jpeg';
import img9645 from '../../assets/proposal photos/proposal_gal/IMG_9645.jpeg';
import terminal from '../../assets/proposal photos/proposal_gal/terminal.png';
import img5450 from '../../assets/proposal photos/proposal_gal/IMG_5450.jpeg';
import img9707 from '../../assets/proposal photos/proposal_gal/IMG_9707.jpeg';
import img9438 from '../../assets/proposal photos/proposal_gal/IMG_9438.jpeg';
import img6020 from '../../assets/proposal photos/proposal_gal/IMG_6020.jpeg';
import img5925 from '../../assets/proposal photos/proposal_gal/IMG_5925.jpeg';
import img5445 from '../../assets/proposal photos/proposal_gal/IMG_5445.jpeg';
import img9454 from '../../assets/proposal photos/proposal_gal/IMG_9454.jpeg';
import img9552 from '../../assets/proposal photos/proposal_gal/IMG_9552.jpeg';
import img9710 from '../../assets/proposal photos/proposal_gal/IMG_9710.jpeg';
import img9416 from '../../assets/proposal photos/proposal_gal/IMG_9416.jpeg';
import img9495 from '../../assets/proposal photos/proposal_gal/IMG_9495.jpeg';
import img9856 from '../../assets/proposal photos/proposal_gal/IMG_9856.jpeg';
import img5573 from '../../assets/proposal photos/proposal_gal/IMG_5573.jpeg';
import img5654 from '../../assets/proposal photos/proposal_gal/IMG_5654.jpeg';
import img5992 from '../../assets/proposal photos/proposal_gal/IMG_5992.jpeg';
import img5960 from '../../assets/proposal photos/proposal_gal/IMG_5960.jpeg';
import img9728 from '../../assets/proposal photos/proposal_gal/IMG_9728.jpeg';
import img5783 from '../../assets/proposal photos/proposal_gal/IMG_5783.jpeg';
import img5259 from '../../assets/proposal photos/proposal_gal/IMG_5259.jpeg';
// List of imported images
const proposalImages = [
    img9306, img5105, img5144, img9645, terminal, img5450, img9707, img9438,
    img6020, img5925, img5445, img9454, img9552, img9710, img9416, img9495,
    img9856, img5573, img5654, img5992, img5960, img9728, img5783, img5259
];

function Proposal() {
    const [isHighQualityLoaded, setIsHighQualityLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = landing;
        img.onload = () => setIsHighQualityLoaded(true);

        // Scroll to top of the page when the component mounts
        window.scrollTo(0, 0);

        // Add scroll animation
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.section, .img, .content');
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                const sectionHeight = section.clientHeight;

                const visiblePercentage = (Math.min(sectionBottom, windowHeight) - Math.max(sectionTop, 0)) / sectionHeight;

                if (visiblePercentage >= 0.01) {
                    section.classList.add('fadeIn');
                    section.classList.remove('fadeOut');
                } else {
                    section.classList.remove('fadeIn');
                    section.classList.add('fadeOut');
                }
            });
        });
    }, []);


    // Define breakpoints for responsive masonry layout
    const breakpointColumnsObj = {
    default: 4, // Default number of columns
    1100: 3,    // Adjust number of columns based on screen size
    700: 2,
    500: 1,
    };

    return (
        <div>
            {/* Proposal Section */}
            <section id="Proposal" className="fullscreen-section">
                <img src={isHighQualityLoaded ? landing : landingloqual} className="background-image" alt="Proposal" />
                {isHighQualityLoaded && (
                    <div className="overlay-text">
                        <div className="angled-text-container">
                            {/* Angled letters for "Proposal" */}
                            {"Proposal".split("").map((letter, index) => (
                                <div key={index} className="angled-letter prop">{letter}</div>
                            ))}
                        </div>
                        <p className="wedding-date" id="proposal-tag">Our Moment in Time</p>
                        <p className="wedding-date" id="proposal-location">Chicago, IL, USA</p>
                    </div>
                )}
            </section>
        
            {/* Proposal Details Section */}
            <section id="proposal-details" className="section">
                {/* Your existing Proposal details */}
                <h2>Proposal Details</h2>
                <div className="row-col-box">
                    <div className="a">
                     <p>I always knew I wanted to propose in Chicago—a city that held a special place in our relationship, especially at Buckingham Fountain. It was there that our bond began to deepen, moving beyond the group setting we were initially in.<br /><br />

                     &emsp; I envisioned turning the proposal into a memorable trip, allowing us to savor our engagement before returning to daily life. Chicago, followed by Toronto, seemed like the perfect itinerary.<br /><br />

                     &emsp; Originally, the proposal was set for Tuesday, May 14th, at Buckingham Fountain. However, with stormy weather forecasted, I decided to shift the plan to Wednesday, May 15th. Since both Sharon and I are passionate about food, I planned to start the day with brunch at the iconic restaurant Kasama. After a delightful meal, we headed to the Field Museum. It was there that my nerves began to set in.<br /><br />

                     &emsp; The delay due to the weather meant the photographer’s availability was limited, which made our time at the museum feel a bit rushed. We returned to the hotel to change before heading to the park for the big moment, with dinner planned afterward. Despite two Ubers canceling on us, causing a 15-minute delay, we eventually made our way to the park on foot. Once we spotted the photographer, everything fell into place.<br /><br />

                     &emsp; We later celebrated with a dinner at Bavette’s, enjoying an intimate setting to remember our moment in time. May 15, 2024, is now and forever our day—a memory we will cherish for a lifetime.</p>
                     <br /><br />
                     <p><i><center>SASE National Conference, Chicago 2018</center></i></p>
                     <img src={nc2018}  alt="Past Us" width="400vw" class="center"/>
                     <p><i><center>Us after the proposal, Chicago 2024</center></i></p>
                     <img src={nc2018recreate}  alt="Us Now" width="400vw" class="center"/>
                    </div>
                    <div className="b">
                        {/* <!-- Additional content or images can go here --> */}
                        <div className="wedding-timeline">
                                <div className="timeline">
                                    <div className="container right">
                                        <div className="content">
                                            <img src={kasama} className="details-img" width="370" height="370" alt="wedding detail imgs"/>
                                            <h3>Eat Kasama</h3>
                                            <h3>10:41 AM</h3>
                                            <p>Kasama, Filipino Bakery<br />Chicago, IL</p>
                                        </div>
                                    </div>
                                    <div className="container left">
                                        <div className="content">
                                        <img src={fieldmuseum} className="details-img" width="370" height="370" alt="wedding detail imgs"/>
                                            <h3>Visitng Sue</h3>
                                            <h3>12:51 PM</h3>
                                            <p>Field History Museum<br /> Chicago, IL</p>
                                        </div>
                                    </div>
                                    <div className="container right">
                                        <div className="content">
                                        <img src={proposal} className="details-img" width="370" height="370" alt="wedding detail imgs"/>
                                            <h3>"Dress Up"</h3>
                                            <h3>4:30 PM</h3>
                                            <p>Buckingham Fountain<br /> Chicago, IL</p>
                                        </div>
                                    </div>
                                    <div className="container left">
                                        <div className="content">
                                        <img src={bavetts} className="details-img" width="370" height="370" alt="wedding detail imgs"/>
                                            <h3>Late Night</h3>
                                            <h3>9:48 PM</h3>
                                            <p>Bavett's Bistro<br /> Chicago, IL</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* Proposal Photos Section with Masonry Layout */}
            <section id="proposal-photos" className="section">
                <h2>Proposal Photos</h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {proposalImages.map((image, index) => (
                        <img key={index} src={image} alt={`Proposal ${index}`} className="masonry-item" />
                    ))}
                </Masonry>
            </section>
        </div>
    );
}

export default Proposal;
