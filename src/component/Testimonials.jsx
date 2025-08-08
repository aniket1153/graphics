import React, { useRef, useState } from 'react'; 
import Slider from 'react-slick';
import img1 from '../assets/chetak1.jpg';
import img2 from '../assets/client1.png';

const testimonials = [
  {
    name: 'Emily Carter',
    role: 'CEO, BrightTech',
    quote: 'Their dedication and understanding of our vision made it a seamless experience.',
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
    quote: 'Their dedication and understanding of our vision made it a seamless experience.',
    image: img1,
  },
  {
    name: 'Liam Johnson',
    role: 'Product Manager, InnoWave',
    quote: 'Their dedication and understanding of our vision made it a seamless.',
    image: img2,
  },
  {
    name: 'Aarav Mehta',
    role: 'CEO, Printify India',
    quote: 'Their dedication and understanding of our vision made it a seamless experience..',
    image: img2,
  }
];

const Testimonials = () => {
  const sliderOneRef = useRef(null);
  const sliderTwoRef = useRef(null);

  const [isPausedRow1, setPausedRow1] = useState(false);
  const [isPausedRow2, setPausedRow2] = useState(false);

  const settingsRow1 = {
    dots: false,
    infinite: true,
    autoplay: !isPausedRow1,
    autoplaySpeed: 1500,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    rtl: false, // Left to right
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ],
  };

  const settingsRow2 = {
    dots: false,
    infinite: true,
    autoplay: !isPausedRow2,
    autoplaySpeed: 1500,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    rtl: true, // Right to left
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }
    ],
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w- mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-12">
          What Our Clients Say
        </h2>

        {/* First Row: 80% width, left to right */}
        <div
          className="mx-auto mb-16"
          style={{ width: '90%' }}
          onMouseEnter={() => setPausedRow1(true)}
          onMouseLeave={() => setPausedRow1(false)}
        >
          <Slider ref={sliderOneRef} {...settingsRow1}>
            {testimonials.slice(0, 4).map((client, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-24 h-24 rounded-full border-4 border-blue-100 object-cover mb-6"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{client.role}</p>
                  <p className="text-gray-700 italic text-base">“{client.quote}”</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Second Row: 100% width, right to left */}
        <div
          className="mx-auto"
          style={{ width: '100%' }}
          onMouseEnter={() => setPausedRow1(true)}
          onMouseLeave={() => setPausedRow2(false)}
        >
          <Slider ref={sliderTwoRef} {...settingsRow2}>
            {testimonials.map((client, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center h-full">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-24 h-24 rounded-full border-4 border-blue-100 object-cover mb-6"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{client.role}</p>
                  <p className="text-gray-700 italic text-base">“{client.quote}”</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
