import React from 'react'
import Navbar from './component/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './component/ImageSlider';
import OurWorkSection from './component/OurWorkSection';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';




const App = () => {
  return (
    <div>
      <Navbar/>
       <ImageSlider />
       <OurWorkSection/>
       <Testimonials/>
       <Footer/>
    </div>
  )
}

export default App
