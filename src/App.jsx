import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import ImageSlider from './component/ImageSlider';
import OurWorkSection from './component/OurWorkSection';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs'; // assuming AboutUs component exists

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurVision from './component/OurVision';
import HeroSection from './component/HeroSection';
import ServiceCards from './component/ServiceCards';
import OurServices from './component/OurServices';
import OurWork from './component/OurWork';
import ContactForm from './component/ContactForm';

const Home = () => (
  <>
    <ImageSlider />
    <HeroSection/>
    < ServiceCards/>
    <AboutUs/>
    <OurWorkSection />
    <Testimonials />
    
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourvision" element={<OurVision />} />
          <Route path='/OurServices' element={<OurServices/>}/>
              <Route path='/Ourwork' element={<OurWork/>}/>
              <Route path='/ContactForm' element={<ContactForm/>}/>

          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
