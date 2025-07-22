import React from 'react';
import Slider from 'react-slick';
import img1 from '../assets/chetak1.jpg';
import img2 from '../assets/client1.png';

const testimonials = [
  {
    name: 'Emily Carter',
    role: 'CEO, BrightTech',
    quote: 'Working with this team was an absolute pleasure.',
    image: img1,
  },
  {
    name: 'Michael Roberts',
    role: 'CTO, Nova Solutions',
    quote: 'Their dedication and understanding of our vision made it a seamless experience.',
    image: img2,
  },
  {
    name: 'Sophia Patel',
    role: 'Founder, CreatiVue',
    quote: 'Their creativity and technical skills brought our project to life in ways we never imagined.',
    image: img1,
  },
  {
    name: 'Liam Johnson',
    role: 'Product Manager, InnoWave',
    quote: 'Excellent service and professional execution. We couldn’t be happier with the outcome.',
    image: img2,
  },
  {
    name: 'Aarav Mehta',
    role: 'CEO, Printify India',
    quote: 'A visionary team with excellent client handling. Our brand launch was a success thanks to them.',
    image: img2,
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-12">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col justify-center items-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-100 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{client.role}</p>
                <p className="text-gray-700 italic text-base">“{client.quote}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
