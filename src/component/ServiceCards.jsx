import React from 'react';
import { AiFillStar, AiOutlinePrinter } from 'react-icons/ai';
import { FaBoxOpen, FaPaintBrush, FaTruckMoving, FaTabletAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Packaging',
    description: 'Custom box and label design.',
    icon: <FaBoxOpen size={70} />,
  },
  {
    title: 'Printing',
    description: 'High-quality print solutions.',
    icon: <AiOutlinePrinter size={65} />,
  },
  {
    title: 'Design',
    description: 'Creative brand packaging.',
    icon: <FaPaintBrush size={55} className="mb-1" />,
  },
  {
    title: 'Large Format',
    description: 'Banner and hoarding prints.',
    icon: <FaTruckMoving size={65} className="mb-1" />,
  },
  {
    title: 'Gadgets',
    description: 'Custom promotional gadgets.',
    icon: <FaTabletAlt size={60} className="mb-1" />,
  },
];

const ServiceCards = () => {
  return (
    <section className="w-full py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#112b5b] mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#112b5b] text-white w-full max-w-[240px] h-[260px] rounded-xl shadow-lg flex flex-col items-center p-5 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-3 text-[#FFA500]">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-center text-gray-300">{service.description}</p>

            <div className="flex gap-1 mt-auto pt-4">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-400" size={20} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
