import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight className="text-xl text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft className="text-xl text-gray-700" />
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
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
  { id: 1, url: 'https://media.istockphoto.com/id/961633870/photo/asphalt-road-and-hills-with-clouds-landscape-at-sunset.jpg?s=612x612&w=0&k=20&c=YE3Yv6YUduNzjT8krxbG3XgSEcJHVFFnMY22caSBmf4=' },
  { id: 2, url: 'https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 3, url: 'https://onlinetools.com/images/examples-onlineimagetools/tree-surrounded-by-water.jpg' },
  ];

  return (
    <div className="w-full relative mt-6">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img
              src={slide.url}
              alt={`Slide ${slide.id}`}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
