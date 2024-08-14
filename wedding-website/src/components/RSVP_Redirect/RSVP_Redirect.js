// src/components/Subpages/RSVP_Redirect.js
import React, { useEffect } from 'react';
import './RSVP_Redirect.css';

function RSVP_Redirect() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "https://www.zola.com/wedding/sharonandbrandon2025/rsvp";
        }, 3000); // 3-second delay

        return () => clearTimeout(timer); // Cleanup the timer if component unmounts
    }, []);

    return (
        <div className="rsvp-redirect-body">
            <div className="rsvp-redirect-container">
                <h1>Hold Tight!</h1>
                <p>We're taking you to our RSVP page.</p>
                <p>Get ready to celebrate with us!</p>
                <div className="rsvp-redirect-loader"></div>
            </div>
        </div>
    );
}

export default RSVP_Redirect;
