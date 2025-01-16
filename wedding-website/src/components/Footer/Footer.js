// src/components/Header.js
import { Link } from 'react-router-dom';

import '../../App.css'; // If you have specific styles
import './Footer.css'; // If you have specific styles

import img1 from '../../assets/engagement photos/IMG_1787.avif';
import img2 from '../../assets/engagement photos/IMG_1541.avif';
import img3 from '../../assets/engagement photos/1A5A2051.avif';
import img4 from '../../assets/engagement photos/IMG_1379-Enhanced-NR.avif';


function Footer() {
  return (
        <footer id="footer">
            <div className="top-section">
                <span className="Initials">S⋅B</span>
                <span className="with-love"> with love</span>
            </div>
            <div className="middle-section">
                <div className="left">
                  <img src={img1} alt="1"/>
                  <img src={img2} alt="2"/>
                  
                </div>    
                <div className="menu">
                  <ul>
                    <li>< Link to='/ourstory'>I. OUR STORY</Link></li>
                    <li>< Link to='/proposal'>II. PROPOSAL</Link></li>
                    <li>< Link to='/enagement'>III. ENGAGEMENT</Link></li>
                    <li><a href="https://www.zola.com/registry/sharonandbrandon2025">IV. REGISTRY</a></li>
                 </ul>
              </div>

                <div className="right">
                  <img src={img3} alt="3"/>
                  <img src={img4} alt="4"/>
                </div>
            </div>
            <div className="bottom-section">
                <span className="1 Corithians 13:4"> 1 Corithians 13:4</span>
            </div>

        </footer>
    
  );
}

export default Footer;
