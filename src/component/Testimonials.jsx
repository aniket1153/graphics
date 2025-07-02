import React from 'react';

const testimonials = [
  {
    name: 'Emily Carter',
    role: 'CEO, BrightTech',
    quote:
      'Working with this team was an absolute pleasure. The results exceeded our expectations and the communication was top-notch!',
    image: '/client1.jpg'
  },
  {
    name: 'Michael Roberts',
    role: 'CTO, Nova Solutions',
    quote:
      'Their dedication and understanding of our vision made the entire process seamless. Highly recommended!',
    image: '/client2.jpg'
  },
  {
    name: 'Sophia Patel',
    role: 'Founder, CreatiVue',
    quote:
      'Their creativity and technical skills brought our project to life in ways we never imagined.',
    image: '/client3.jpg'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((client, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">“{client.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
