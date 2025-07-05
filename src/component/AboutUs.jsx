import React from 'react';
import imgab from '../assets/aboutimg.jpg'
const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-5 sm:px-10 lg:px-20">
     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row  gap-20">
  {/* Left Image */}
  <div className="w-full lg:w-[450px] lg:ml-14">
    <img
      src={imgab}
      alt="About Us"
      className="rounded-2xl shadow-lg w-full h-full object-cover"
    />
  </div>

  {/* Right Content aligned to top */}
  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">
      About <span className="text-orange-500">Us</span>
    </h2>
      <h2 className="text-4xl font-bold text-orange-500 mb-4">
      Sunirman <span className="text-gray-800">Graphics</span>
    </h2>
    <p className="text-lg text-gray-600 mb-6">
     Established in 2021–2022, Sunirman Graphics is a growing name in the world of custom printing and packaging solutions..
    </p>
    <p className="text-gray-600 text-lg">
     Over the years, we’ve proudly completed a wide range of creative and high-quality projects for more than 60+ satisfied customers. From standup pouches, flour (atta) packaging, mono carton boxes, BOPP bags, pizza boxes to bottle labels, we offer end-to-end design and printing services tailored to your product’s unique needsOur commitment to quality, timely delivery, and innovative design has helped us build strong, lasting relationships with businesses across industries.Trusted by 60+ clients for delivering customized, high-quality packaging with a creative edge.
At Sunirman Graphics, our mission is to enhance your brand’s identity through standout packaging, and our vision is to be recognized as a trusted partner in the graphics and packaging industry.
    </p>

    <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md transition duration-300">
      Learn More
    </button>
  </div>
</div>

    </section>
  );
};

export default AboutUs;
