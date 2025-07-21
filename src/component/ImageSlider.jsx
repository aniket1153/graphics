import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/final1.jpg";
import img2 from "../assets/final2.jpg";
import img3 from "../assets/final3.jpg";

// Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#0a1f44] p-2 shadow-md rounded-md cursor-pointer transition"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

// Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#0a1f44] p-2 shadow-md rounded-md cursor-pointer transition"
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
    autoplaySpeed: 1500, // Auto run every 3 sec
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  const slides = [
    { id: 1, url: img1, caption: "We design what you imagine" },
    { id: 2, url: img2, caption: "Creative, Clean & Modern" },
    { id: 3, url: img3, caption: "Let’s Build Something Great Together" },
  ];

  return (
    <div className="w-full relative mt-1">
      <div className="overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.url}
                alt={`Slide ${slide.id}`}
                className="w-full h-[580px] object-cover"
              />
              {/* Optional overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end px-8 pb-6">
                <h2 className="text-white text-2xl md:text-3xl font-semibold drop-shadow-lg">{slide.caption}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
