import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../assets/final1.jpg';
import img2 from '../assets/final2.jpg';
import img3 from '../assets/final3.jpg';

// Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#0a1f44] p-2 sm:p-3 shadow-md rounded-md cursor-pointer transition duration-300"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

// Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#0a1f44] p-2 sm:p-3 shadow-md rounded-md cursor-pointer transition duration-300"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
);

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  return (
    <div className="w-full relative pt-[72px] sm:pt-[80px]">
      <div className="max-w-[1536px] mx-auto">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.url}
                alt={`Slide ${slide.id}`}
                className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[620px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end px-4 sm:px-10 pb-8 sm:pb-12">
                <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-semibold drop-shadow-lg leading-snug max-w-4xl">
                  {slide.caption}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
