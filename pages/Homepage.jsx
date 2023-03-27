import React from 'react'
import Carousel from '../components/Bannercomponents/Carousel';
import { CarouselData } from '../components/Bannercomponents/CarouselData';
// import Herosection from '../components/Bannercomponents/Herosection'
import CompanySection from '../components/CompanySection/CompanySection';
import Card from '../components/Courses/Card.js';
import Testimonials from '../components/CustomerStory/Testimonials';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import OurCources from '../components/OurCources/OurCources';

//////




function Homepage() {

  return (
    <div className="Homepage-main prevent-select">
      <Navbar />
      <Carousel images={CarouselData} />

      <CompanySection />
      <OurCources />
      <Testimonials/>
      <Card />
      <Footer />
    </div>
  );
}

export default Homepage;