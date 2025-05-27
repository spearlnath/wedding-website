// src/components/Subpages/Registry_Redirect.js
import { useEffect } from 'react';
import './Registry_Redirect.css';

function Registry_Redirect() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "https://www.zola.com/registry/sharonandbrandon2025";
        }, 3000); // 3-second delay

        return () => clearTimeout(timer); // Cleanup the timer if component unmounts
    }, []);

    return (
        <div className="registry-redirect-body">
            <div className="registry-redirect-container">
                <h1>Hold Tight!</h1>
                <p>We're taking you to our Registry page.</p>
                <div className="registry-redirect-loader"></div>
            </div>
        </div>
    );
}

export default Registry_Redirect;
