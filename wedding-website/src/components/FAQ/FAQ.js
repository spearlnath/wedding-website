import { useEffect } from 'react';

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
            <p>Since parking is limited and we know many of you are traveling, we recommend planning your arrival with a little extra time. The ceremony will begin promptly at 4:00 PM, and we can’t wait to see you there!</p>
          </div>
        </div>
        <div className="faq-item">
          <h3 className="question">
            Will alcohol be served at the wedding?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>While we’ve decided to have an alcohol-free celebration due to religious reasons, we’re excited to offer a selection of delightful beverages for everyone to enjoy. We can't wait to toast to love with you!</p>
          </div>
        </div>
        <div className="faq-item">
          <h3 className="question">
            What is the dress code?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>We’re embracing a colorful celebration! We kindly ask that you wear vibrant, colorful dresses—no black or white, as white is reserved for the bride. For some inspiration, feel free to check out our Pinterest board. </p>
              <a href='https://pin.it/4AdP74mj1' >S&B 2025 Wedding Guest</a>
            <p>We can’t wait to see your beautiful choices!</p>
          </div>
        </div>
        <div className="faq-item">
          <h3 className="question">
            Can I bring a date?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>We’re keeping our guest list close to our hearts, so unless your invitation specifically includes a plus one, we’re unable to accommodate additional guests. We’re so grateful you’ll be there to celebrate with us!</p>
          </div>
        </div>
        <div className="faq-item">
          <h3 className="question">
            Are children welcome?
            <span className="toggle">+</span>
          </h3>
          <div className="answer" style={{ display: 'none' }}>
            <p>To keep the event intimate, we’re only able to accommodate individuals that are listed on invites. We truly appreciate your understanding and can’t wait to celebrate with you. </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
