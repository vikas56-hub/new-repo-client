import React from 'react';

import './Testimonials.scss';
import TestimonialData from './TestimonialData';
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import { useEffect } from 'react';

function Testimonials() {
  const handleScrollNext = () => {
    const cards = document.querySelector('.Testimonial-card-content');
    cards.scrollLeft +=
      window.innerWidth / 2 > 600
        ? window.innerWidth / 2
        : window.innerWidth - 100;
  };

  const handleScrollPrev = () => {
    const cards = document.querySelector('.Testimonial-card-content');
    cards.scrollLeft -=
      window.innerWidth / 2 > 600
        ? window.innerWidth / 2
        : window.innerWidth - 100;
  };
  // Autoplay Feature

  //  useEffect(() => {
  //    const interval = setInterval(() => {
  //      handleScrollNext();
  //    }, 10000);
  //    return () => clearInterval(interval);
  //  }, []);

  return (
    <div className="Testimonial-section">
      {/* Your existing component code here */}
      <div className="Testimonial-heading-buttons container">
        {/* <button id="prev" onClick={handleScrollPrev}>
          Prev
        </button>
        <button id="next" onClick={handleScrollNext}>
          Next

        </button> */}
        <div className="Testimonial-Heading">
          <h1>Customer Story</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae doloribus eaque animi vitae quasi ducimus.
            Voluptatibus fuga quia nemo iste?
          </p>
        </div>
        <div className="Testimonial-buttons">
          <button
            id="prev"
            onClick={handleScrollPrev}
            className="scroll-button-left"
          >
            <FaArrowLeft
              size={30}
              style={{
                color: 'black',
                padding: '0px',
                fontWeight: 100,
              }}
            />
          </button>
          <button
            id="next"
            onClick={handleScrollNext}
            className="scroll-button-right"
          >
            <FaArrowRight
              size={30}
              style={{
                color: 'white',
                padding: '0px',
                fontWeight: 100,
              }}
            />
          </button>
        </div>
      </div>
      <div>
        <div className="Testimonial-main ">
          {/* <button id="prev" className="btn">
            <i className="las la-angle-left" />
          </button> */}
          {/* <button id="prev" onClick={handleScrollPrev}>
            Prev
          </button> */}
          <div className="Testimonial-card-content container">
            {/* Card */}

            {TestimonialData.map((el) => {
              return (
                <div
                  className="Testimonial-card"
                  style={{ backgroundColor: el.bgcolor }}
                >
                  <div className="Testimonial-card-text">
                    <h2>{el.Heading}</h2>
                    <p className="Testimonial-review">
                      {el.Testimonial}
                    </p>
                    <div className="Testimonial-card-img">
                      <img src={el.Img} alt="" />
                    </div>
                    <p className="reviewer">
                      <p className="reviewer-name">{el.Name}</p>
                      <p className="reviewer-desigination">
                        {el.Desigination}
                      </p>
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Card End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
