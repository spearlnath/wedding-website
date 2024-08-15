import React, { useEffect } from 'react';

import '../../App.css';
import './FAQ.css';

import bkgrndimg from '../../assets/engagement photos/IMG_1615.avif';

function FAQ() {
  
  useEffect(() => {

    // Function to handle the FAQ item toggle
    const handleItemClick = function() {
      const answer = this.querySelector('.answer');
      const toggle = this.querySelector('.toggle');

      const isActive = answer.style.display === 'block';

      answer.style.display = isActive ? 'none' : 'block';
      toggle.textContent = isActive ? '+' : '-';
    };

    // FAQ Section Toggle
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
      item.addEventListener('click', handleItemClick);
    });

    // FAQ Section Scroll
    const handleScroll = () => {
      const faqSection = document.getElementById("faq");
      const imageSection = document.getElementById("image2");
      if (!imageSection) return;  // Ensure imageSection is present

      const imageHeight = imageSection.offsetHeight;
      const scrollY = window.scrollY;

      let translateY = 0;
      if (scrollY > imageSection.offsetTop) {
        let scrollProgress = (scrollY - imageSection.offsetTop) / (imageHeight / 2);
        translateY = Math.min(50, Math.max(0, scrollProgress * 45));
      }

      faqSection.style.transform = `translateY(-${translateY}%)`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      faqItems.forEach((item) => {
        item.removeEventListener('click', handleItemClick);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Background Image Before FAQ Section */}
      <div id="image2" className="background-image-size1">
        <img src={bkgrndimg} alt="Wedding 2"/>
      </div>
      
      {/* FAQ section */}
      <section id="faq" className="faq-container">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3 className="question">
            What time should I arrive to the ceremony?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>Answer to question 1 goes here.</p>
          </div>
        </div>
        <div className="faq-item">
          <h3 className="question">
            Will alcohol be served at the wedding?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>No</p>
          </div>
        </div>
        <div className="faq-item">
          <h3 className="question">
            What is the dress code?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>Answer to question 2 goes here.</p>
          </div>
        </div>
        <div className="faq-item">
          <h3 className="question">
            Can I bring a date?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>No.</p>
          </div>
        </div>
        <div className="faq-item">
          <h3 className="question">
            Are children welcome?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>No.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
