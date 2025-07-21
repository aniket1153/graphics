import React from 'react';
import Slider from 'react-slick';
import img1 from '../assets/chetak1.jpg';
import img2 from '../assets/client1.png';

const testimonials = [
  {
    name: 'Emily Carter',
    role: 'CEO, BrightTech',
    quote: 'Working with this team was an absolute pleasure. ',
    image: img1
  },
  {
    name: 'Michael Roberts',
    role: 'CTO, Nova Solutions',
    quote: 'Their dedication and understanding of our vision made it',
    image: img2
  },
  {
    name: 'Sophia Patel',
    role: 'Founder, CreatiVue',
    quote: 'Their creativity and technical skills brought our project to life in ways we never imagined.',
    image: img1
  },
  {
    name: 'Liam Johnson',
    role: 'Product Manager, InnoWave',
    quote: 'Excellent service and professional execution. We couldn’t be happier with the outcome.',
    image: img2
  },
  {
    name: 'Aarav Mehta',
    role: 'CEO, Printify India',
    quote: 'A visionary team with excellent client handling. Our brand launch was a success thanks to them.',
    image: img2
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">
        What Our Clients Say
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl shadow-md p-6 transition-transform transform hover:scale-105 duration-300 text-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-blue-200 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{client.role}</p>
                <p className="text-gray-700 italic text-base">“{client.quote}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
