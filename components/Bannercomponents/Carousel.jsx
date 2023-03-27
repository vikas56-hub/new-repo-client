// import { useEffect, useRef, useState } from 'react';
// import './Carousel.css';

// function Carousel({ images }) {
//   const [current, setCurrent] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(false);
//   const [touchPosition, setTouchPosition] = useState(null);
//   let timeOut = null;

//   const timeOutRef = useRef(null);

//   useEffect(() => {
//     timeOutRef.current =
//       autoPlay &&
//       setTimeout(() => {
//         slideRight();
//       }, 1000);

//     return () => clearTimeout(timeOutRef.current);
//   }, [autoPlay, current]);

//   const slideRight = () => {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   };

//   const slideLeft = () => {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   };

//   const handleTouchStart = (e) => {
//     setAutoPlay(false);
//     clearTimeout(timeOut);
//     setTouchPosition(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     const distance = e.touches[0].clientX - touchPosition;
//     if (distance < -50) {
//       slideRight();
//       setTouchPosition(e.touches[0].clientX);
//     } else if (distance > 50) {
//       slideLeft();
//       setTouchPosition(e.touches[0].clientX);
//     }
//   };

//   const handleTouchEnd = () => {
//     setAutoPlay(true);
//   };

//   return (
//     <div
//       className="carousel"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       onMouseEnter={() => {
//         setAutoPlay(false);
//         clearTimeout(timeOut);
//       }}
//       onMouseLeave={() => {
//         setAutoPlay(true);
//       }}
//     >
//       <div className="carousel_wrapper">
//         {images.map((image, index) => {
//           return (
//             /* (condition) ? true : false */

//             <div
//               key={index}
//               className={
//                 index === current
//                   ? 'carousel_card carousel_card-active'
//                   : 'carousel_card'
//               }
//             >
//               <img className="card_image" src={image.image} alt="" />
//               <div className="card_overlay">
//                 <div className="card_overlay_text">
//                   <h2 className="card_title">{image.title}</h2>
//                   <p className="card_para">{image.para}</p>
//                   <a href={image.Link}>{image.Link_Name}</a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//         <div className="carousel_arrow_left" onClick={slideLeft}>
//           &lsaquo;
//         </div>
//         <div className="carousel_arrow_right" onClick={slideRight}>
//           &rsaquo;
//         </div>
//         {/* <div className="carousel_pagination">
//           {images.map((_, index) => {
//             return (
//               <div
//                 key={index}
//                 className={
//                   index === current
//                     ? "pagination_dot pagination_dot-active"
//                     : "pagination_dot"
//                 }
//                 onClick={() => setCurrent(index)}
//               ></div>
//             );
//           })}
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

import { useEffect, useRef, useState } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);
  let timeOut = null;

  const timeOutRef = useRef(null);

  useEffect(() => {
    timeOutRef.current = autoPlay && setTimeout(handleAutoPlay, 5000);

    return () => clearTimeout(timeOutRef.current);
  }, [autoPlay, current]);

  const handleAutoPlay = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    setAutoPlay(false);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    setAutoPlay(false);
  };

  const handleTouchStart = (e) => {
    setAutoPlay(false);
    clearTimeout(timeOut);
    setTouchPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const distance = e.touches[0].clientX - touchPosition;
    if (distance < -50) {
      slideRight();
      setTouchPosition(e.touches[0].clientX);
    } else if (distance > 50) {
      slideLeft();
      setTouchPosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setAutoPlay(true);
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'carousel_card carousel_card-active'
                  : 'carousel_card'
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
                <div className="card_overlay_text">
                  <h2 className="card_title">{image.title}</h2>
                  <p className="card_para">{image.para}</p>
                  <a href={image.Link}>{image.Link_Name}</a>
                </div>
              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
      </div>
    </div>
  );
}

export default Carousel;
