import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa'; // React Icons

const OurVision = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our <span className="text-orange-500">Mission</span> & Vision
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover what drives us forward and how we envision shaping the future of creative branding and packaging.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Mission */}
        <div className="flex flex-col items-center text-center lg:text-left p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="text-orange-500 text-5xl mb-4">
            <FaBullseye />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To deliver innovative, high-quality, and reliable branding and packaging solutions that help businesses stand out, engage customers, and build lasting impressions.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center text-center lg:text-left p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="text-orange-500 text-5xl mb-4">
            <FaEye />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be a leading force in the design and print industry — recognized for creativity, innovation, trust, and a deep commitment to customer satisfaction and service excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
