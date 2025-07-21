import React from 'react';
import TextType from './TextType';

const HeroSection = () => {
  return (
    <section className="w-full h-[500px] flex items-center justify-center px-4 sm:px-10" 
      style={{
        background: 'linear-gradient(to right, #0a1f44, #0e2a64)', // Dark navy blue gradient
      }}
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <TextType
            text={["Welcome to Sunirman Graphics", "We Provide Best Efficient Services"]}
            typingSpeed={70}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="block"
            textColors={["#ffffff", "#FFA500"]} // white and orange for contrast
          />
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mt-4">
          Trusted by 60+ clients for impactful and creative printing solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
