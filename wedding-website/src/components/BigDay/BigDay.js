// src/components/Big_Day.js
import { useEffect } from 'react';

import '../../App.css';
import './BigDay.css';

import bells from '../../assets/bells.avif';
import teacup from '../../assets/teacup.avif';
import cake from '../../assets/cake.avif';
import eng from '../../assets/engagement photos/engphotoshoulder.avif'
function BigDay() {

  
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
        const weddingTimeline = document.querySelectorAll('.timeline-item');
        weddingTimeline.forEach(event => {
            event.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    });

    return () => {

    };
  }, []);

  

  return (
    // <!-- The Big Day section -->
    <section id="big-day" className="section">
          <h2>The Big Day Details</h2>
          <div className="row-col-box">
            <div className="a">
              <div className="wedding-timeline">
                <div className="timeline">
                    <div className="container left">
                        <div className="content">
                            <img src={bells} className="details-img" width="370" height="370" alt="wedding detail imgs"/>
                            <h3>Ceremony</h3>
                            <h3>3:30 PM</h3>
                            <p>At the Upper Courtyard<br />La Playa, Carmel, CA</p>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                           <img src={teacup} className="details-img" width="370" height="370" alt="wedding detail imgs"/>
                            <h3>Cocktail Hour</h3>
                            <h3>5:00 PM</h3>
                            <p>At the Lower Courtyard<br /> La Playa, Carmel, CA</p>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content">
                          <img src={cake} className="details-img" width="370" height="370" alt="wedding detail imgs"/>
                            <h3>Reception</h3>
                            <h3>6:00 PM</h3>
                            <p>At the Pacific Terrace Room<br /> La Playa, Carmel, CA</p>
                        </div>
                    </div>
                </div>
              </div>
           </div>
           <div className="b">
              <div className="sketch-border">
                <img src={eng} className="bordered-img" alt="bordered" />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;"And over all these virtues put on love, which binds them all together in perfect unity."</p> 
                <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Colossians 3:14</p>
              </div> 
           </div> 
          </div>
          
    </section>
  );
}

export default BigDay;
