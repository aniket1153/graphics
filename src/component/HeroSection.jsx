import React from 'react';
import TextType from './TextType';

const HeroSection = () => {
  return (
    <section
      className="w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28"
      style={{
        background: 'linear-gradient(to right, #0a1f44, #0e2a64)',
        minHeight: '80vh', // Scales with screen
      }}
    >
      <div className="text-center max-w-5xl">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6">
          <TextType
            text={["Welcome to Sunirman Graphics", "We Provide Best Efficient Services"]}
            typingSpeed={70}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="block"
            textColors={["#ffffff", "#FFA500"]}
          />
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto">
          Trusted by 60+ clients for impactful and creative printing solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
