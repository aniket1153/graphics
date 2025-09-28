import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/profilepage2.jpg';
import img2 from '../assets/profilepage3.jpg';
import img3 from '../assets/profilepage4.jpg';
import img4 from '../assets/profilepage1.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    pauseOnHover: true,
    nextArrow: <div />, // hide visible arrow
    prevArrow: <div />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    { id: 1, url: img1, caption: 'We design what you imagine' },
    { id: 2, url: img2, caption: 'Creative, Clean & Modern' },
    { id: 3, url: img3, caption: 'Let’s Build Something Great Together' },
   
  ];

  const handleClick = (e) => {
    const middle = e.currentTarget.offsetWidth / 2;
    const sliderRoot = e.currentTarget.closest('.slick-slider');

    if (!sliderRoot) return;

    if (e.clientX < middle) {
      sliderRoot.querySelector('.slick-prev')?.click();
    } else {
      sliderRoot.querySelector('.slick-next')?.click();
    }
  };

  return (
   <div className="relative w-full overflow-hidden pt-[72px] sm:pt-[80px] mb-6">
  <div className="w-full mx-auto">
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="relative">
          <img
            src={slide.url}
            alt={`Slide ${slide.id}`}
            className="w-full 
              h-[350px] 
              sm:h-[450px] 
              md:h-[500px] 
              lg:h-[510px] 
              xl:h-[700px] 
              object-cover"
          />

          {/* Clickable overlay for navigation */}
          <div
            className="absolute inset-0 z-20 cursor-pointer"
            onClick={handleClick}
          />

          {/* Caption overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end px-4 sm:px-10 pb-8 sm:pb-12 z-10">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-semibold drop-shadow-lg leading-snug max-w-4xl">
              {slide.caption}
            </h2>
          </div> */}
        </div>
      ))}
    </Slider>
  </div>
</div>


  );
};

export default ImageSlider;
