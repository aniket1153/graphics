import React from 'react';
import img1 from "../assets/sliceimg1.jpg";
import img2 from "../assets/sliceimg2.png";
import img3 from "../assets/sliceimg7.jpg";
import img4 from "../assets/sliceimg4.png";
import img5 from "../assets/sliceimg5.jpg";
import img6 from "../assets/sliceimg6.jpg";

const works = [
  {
    id: 1,
    title: 'A Stand-Up Pouch',
    description: "A stand-up pouch is a modern and flexible packaging solution widely used across industries such as food, beverages, cosmetics, pharmaceuticals, and pet care. These pouches are designed to stand upright on shelves, thanks to their bottom gusset, ensuring maximum visibility and convenience for both retailers and consumers.",
    image: img1,
  },
  {
    id: 2,
    title: 'Flour/Atta Stand-Up Pouch',
    description: "The Flour/Atta Stand-Up Pouch is a durable, attractive, and functional packaging solution crafted to maintain freshness and ensure long shelf life. Designed to stand upright on retail shelves, it enhances visibility and brand presence while keeping the product secure and hygienic.",
    image: img2,
  },
  {
    id: 3,
    title: 'Bottle Label',
    description: 'A Bottle Label is a customized adhesive or sleeve-style label applied to bottles to convey branding, ingredients, usage information, and visual appeal. Designed to withstand moisture, temperature changes, and handling, bottle labels enhance the product’s shelf presence while delivering key information to consumers.',
    image: img3,
  },
  {
    id: 4,
    title: 'Mono Carton Boxes',
    description: 'Mono Carton Boxes are single-layer, custom-printed folding cartons made from high-quality paperboard. They are ideal for lightweight to moderately weighted retail products and serve as both protective packaging and a branding tool. Widely used across pharmaceuticals, FMCG, cosmetics, food & beverage, electronics, and personal care industries.',
    image: img4,
  },
  {
    id: 5,
    title: 'BOPP Bags',
    description: 'BOPP Bags (Biaxially Oriented Polypropylene) are durable, moisture-resistant, and visually appealing plastic packaging bags widely used in industries like food, agriculture, animal feed, fertilizers, retail, and construction. These bags combine high tensile strength with vibrant printing options, making them ideal for branding and product protection.',
    image: img5,
  },
  {
    id: 6,
    title: 'Pizza Box',
    description: 'The Pizza Box is a sturdy, eco-friendly, and heat-retaining corrugated packaging solution, specially designed to safely deliver hot and fresh pizza. It combines durability with branding potential, ensuring customer satisfaction from oven to doorstep.',
    image: img6,
  },
];

const OurWorkSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-br from-white to-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14 tracking-tight">
        Our Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative group w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white"
          >
            {/* Background image */}
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Title layer */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:opacity-0 transition duration-500">
              <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-2 drop-shadow-lg">
                {work.title}
              </h3>
            </div>

            {/* Description overlay on hover */}
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out bg-[#0a1f44]/95 text-white px-6 py-8 flex flex-col justify-center items-center text-center rounded-2xl">
              <h3 className="text-lg md:text-xl font-bold mb-3">{work.title}</h3>
              <p className="text-sm md:text-[15px] leading-relaxed max-h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent pr-2">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkSection;
