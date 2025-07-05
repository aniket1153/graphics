import React from 'react';
import missionImg from '../assets/img1.jpg'; // replace with your actual image
import visionImg from '../assets/img1.jpg';   // replace with your actual image

const OurVision = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-orange-500">Mission</span> & Vision
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover what drives us forward and how we aim to shape the future of design and branding.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Mission Section */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <img
            src={missionImg}
            alt="Our Mission"
            className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
          />
          <h3 className="text-3xl font-bold text-gray-800 mb-2"> Our Mission</h3>
          <p className="text-gray-600 text-base">
            To deliver creative, reliable, and high-quality packaging solutions that help brands stand out and build lasting impressions.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <img
            src={visionImg}
            alt="Our Vision"
            className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
          />
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600 text-base">
            To become a leading name in graphic and packaging design, known for innovation, trust, and customer-first service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
