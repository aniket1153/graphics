import React from 'react';
import imgab from '../assets/aboutimg.jpg';
import { FaBullseye, FaEye } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="bg-[#f7f9fc] py-20 px-6 sm:px-10 lg:px-24 2xl:px-48">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
        
        {/* Image */}
        <div className="w-full max-w-[560px] shadow-2xl rounded-2xl overflow-hidden border border-gray-200 transform transition duration-700 hover:scale-[1.03]">
          <img
            src={imgab}
            alt="About Sunirman Graphics"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:flex-1 text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0a1f44] tracking-tight leading-tight">
            About <span className="text-orange-500">Us</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl font-semibold text-orange-500 mb-3 tracking-wide">
            Sunirman <span className="text-[#0a1f44]">Graphics</span>
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed max-w-xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            Established in 2021–2022, Sunirman Graphics is a rising name in custom printing and packaging solutions, blending creativity and precision.
          </p>

          <p className="text-base text-gray-600 max-w-xl leading-relaxed">
            We’ve proudly completed <span className="font-semibold text-[#0a1f44]">60+ high-quality projects</span>, including standup pouches, flour packaging, mono carton boxes, BOPP bags, pizza boxes, and bottle labels. Offering <span className="font-semibold text-orange-500">end-to-end design & printing solutions</span> customized for your product's unique needs.<br/><br/>
            Our commitment to <span className="font-semibold text-[#0a1f44]">quality, timely delivery, and creative excellence</span> has helped us foster long-lasting relationships across industries. Trusted by 60+ clients, we're dedicated to elevating brand identity through impactful packaging and becoming your recognized partner in graphics & packaging.
          </p>

          <button
            className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
            text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg transition duration-300 ease-in-out"
            aria-label="Learn more about Sunirman Graphics"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="bg-white py-28 px-6 sm:px-10 lg:px-20 mt-20 rounded-3xl shadow-xl max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Our <span className="text-orange-500">Mission</span> & Vision
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what drives us forward and how we envision shaping the future of creative branding and packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-8 border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition duration-500 bg-gradient-to-tr from-white to-orange-50">
            <div className="text-orange-500 text-6xl mb-6 drop-shadow-md">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-md">
              To deliver innovative, high-quality, and reliable branding and packaging solutions that help businesses stand out, engage customers, and build lasting impressions.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-8 border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition duration-500 bg-gradient-to-tr from-white to-orange-50">
            <div className="text-orange-500 text-6xl mb-6 drop-shadow-md">
              <FaEye />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg max-w-md">
              To be a leading force in the design and print industry — recognized for creativity, innovation, trust, and a deep commitment to customer satisfaction and service excellence.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
