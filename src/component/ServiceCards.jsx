import React from 'react';
import { AiFillStar, AiOutlinePrinter } from 'react-icons/ai';
import { FaBoxOpen, FaPaintBrush, FaTruckMoving, FaTabletAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Packaging',
    description: 'Custom box and label design.',
    icon: <FaBoxOpen size={85} />,
  },
  {
    title: 'Printing',
    description: 'High-quality print solutions.',
    icon: <AiOutlinePrinter size={75} />,
  },
  {
    title: 'Design',
    description: 'Creative brand packaging.',
    icon: <FaPaintBrush size={55} className='mb-4' />,
  },
  {
    title: 'Large Format',
    description: 'Banner and hoarding prints.',
    icon: <FaTruckMoving size={75} className='mb-0.5' />,
  },
  {
    title: 'Gadgets',
    description: 'Custom promotional gadgets.',
    icon: <FaTabletAlt size={65} className='mb-2.5' />,
  },
];

const ServiceCards = () => {
  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#112b5b] mb-10 ">
        Our Services
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#112b5b] text-white w-[250px] h-[250px] rounded-xl shadow-xl flex flex-col items-center p-5 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-3 text-[#FFA500]">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-center text-gray-300">{service.description}</p>

            <div className="flex gap-1 mt-auto pt-4">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-400" size={25} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
