import React from 'react';

import './Card.scss';
import data from './data';
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import { useEffect } from 'react';
const MyComponent = () => {
  const handleScrollNext = () => {
    const cards = document.querySelector('.scroll-card-content');
    cards.scrollLeft +=
      window.innerWidth / 2 > 600
        ? window.innerWidth / 2
        : window.innerWidth - 100;
  };

  const handleScrollPrev = () => {
    const cards = document.querySelector('.scroll-card-content');
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
    <div className="Slider-section">
      {/* Your existing component code here */}
      <div className="Scroll-heading-buttons container">
        {/* <button id="prev" onClick={handleScrollPrev}>
          Prev
        </button>
        <button id="next" onClick={handleScrollNext}>
          Next

        </button> */}
        <div className="Scroll-Heading">
          <h1>Meet out highly Skilled Mentors</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aperiam, iste amet dolores repellendus quo nostrum eius
            rem sapiente, quis suscipit, ipsam veritatis ratione alias
            voluptate aut. Reiciendis ipsam accusamus quam.
          </p>
        </div>
        <div className="Scroll-buttons">
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
        <div className="slider-main ">
          {/* <button id="prev" className="btn">
            <i className="las la-angle-left" />
          </button> */}
          {/* <button id="prev" onClick={handleScrollPrev}>
            Prev
          </button> */}
          <div className="scroll-card-content container">
            {/* Card */}

            {data.map((el) => {
              return (
                <div className="scroll-card">
                  <div className="scroll-card-img">
                    <img src={el.Img} alt="" />
                  </div>
                  <div className="scroll-card-text">
                    <h2>{el.title}</h2>
                    <p>{el.para}</p>
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
};

export default MyComponent;

// with infinite scroll
// import React, { useEffect, useState } from 'react';
// import './Card.scss';
// import data from './data';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// const MyComponent = () => {
//   const [cardWidth, setCardWidth] = useState(0);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScrollNext = () => {
//     const cards = document.querySelector('.scroll-card-content');
//     setScrollPosition(scrollPosition + cardWidth);
//     cards.scrollTo({ left: scrollPosition + cardWidth, behavior: 'smooth' });
//   };

//   const handleScrollPrev = () => {
//     const cards = document.querySelector('.scroll-card-content');
//     setScrollPosition(scrollPosition - cardWidth);
//     cards.scrollTo({ left: scrollPosition - cardWidth, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const cards = document.querySelector('.scroll-card-content');
//     setCardWidth(cards.offsetWidth / 3);

//     const interval = setInterval(() => {
//       handleScrollNext();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Duplicate the data array in both ends
//   const duplicatedData = [...data, ...data, ...data];

//   return (
//     <div className="Slider-section">
//       <div className="Scroll-buttons container">
//         <button id="prev" onClick={handleScrollPrev}>
//           <FaAngleLeft size={30} style={{ color: 'white ',padding: '0px' }} />
//         </button>
//         <button id="next" onClick={handleScrollNext}>
//           <FaAngleRight size={30} style={{ color: 'white ',padding: '0px' }} />
//         </button>
//       </div>
//       <div>
//         <div className="slider-main ">
//           <div className="scroll-card-content container">
//             {duplicatedData.map((el, index) => {
//               return (
//                 <div className="scroll-card" key={index}>
//                   <div className="scroll-card-img">
//                     <img src={el.Img} alt="" />
//                   </div>
//                   <div className="scroll-card-text">
//                     <h2>{el.title}</h2>
//                     <p>{el.para}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyComponent;
