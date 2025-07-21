import React from 'react';
import imgab from '../assets/aboutimg.jpg';

const AboutUs = () => {
  return (
    <section className="bg-[#f7f9fc] py-20 px-5 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        
        {/* Image */}
        <div className="w-full lg:w-[500px]">
          <img
            src={imgab}
            alt="About Sunirman Graphics"
            className="w-full h-full object-cover shadow-xl border border-gray-300"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:flex-1 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-2">
            About <span className="text-orange-500">Us</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">
            Sunirman <span className="text-[#0a1f44]">Graphics</span>
          </h3>

          <p className="text-[17px] text-gray-700 mb-4 leading-relaxed">
            Established in 2021–2022, Sunirman Graphics is a growing name in the world of custom printing and packaging solutions.
          </p>

          <p className="text-[16px] text-gray-600 leading-relaxed">
            We’ve proudly completed 60+ creative, high-quality projects, ranging from standup pouches, flour (atta) packaging, mono carton boxes, BOPP bags, pizza boxes to bottle labels. We offer end-to-end design & printing solutions customized for your product's needs.
            <br /><br />
            Our commitment to <span className="font-medium text-[#0a1f44]">quality, timely delivery, and creative excellence</span> helps us build long-lasting relationships across industries. Trusted by 60+ clients, we are on a mission to elevate brand identity through impactful packaging and become a recognized partner in the graphics & packaging space.
          </p>

          <button className="mt-6 bg-[#0a1f44] hover:bg-[#13294b] text-white px-6 py-3 rounded-md shadow-md transition duration-300 font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
