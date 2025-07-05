import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/final1.jpg"
import img2 from "../assets/final2.jpg"
import img3 from "../assets/final3.jpg"

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight className="text-2xl text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft className="text-2xl text-gray-700" />
  </div>
);

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
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
    {
      id: 1,
      url: img1,
    },
    {
      id: 2,
      url: img2,
    },
    {
      id: 3,
      url: img3,
    },
  ];

  return (
    <div className="w-full relative mt-8 px-4">
      <div className="rounded-xl overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.url}
                alt={`Slide ${slide.id}`}
                className="w-full h-[580px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
