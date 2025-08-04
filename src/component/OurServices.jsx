import React from "react";
import img1 from "../assets/sliceimg3.png";
import { FaCheckCircle } from 'react-icons/fa';

const services1 = [
  {
    category: "Business Essentials",
    items: [
      "Business Cards", "Certificates", "Letterheads", "Document Printing",
      "Brochures", "Cards", "Notepads", 
    ],
  },
  {
    category: "Event Stationery",
    items: [
      "ID Cards", "Invitations", "Bookmarks", "Thank You Cards",
      "Notebooks", "Calendars", "Diaries",
    ],
  },
  {
    category: "Personalized Gifts",
    items: [
      "Photo Frames", "Photo Prints", "Photo Mugs",
      "Photo Wall Calendars", "Greeting Cards",
    ],
  },
  {
    category: "Printed Promotional Materials",
    items: [
      "Flyers and Leaflets", "Post Cards", "Posters", "Booklets",
       "Danglers",
    ],
  },
  {
    category: "Packaging Accessories",
    items: [
      "Packaging Sleeves", "Tags", 
      "Packaging Labels", 
    ],
  },
  {
    category: "Office Supplies & Tools",
    items: [
      "Letterheads", "Envelopes", "Bill Books",
        "Pens",
      "Calendars", "Mousepads",
    ],
  },
  {
    category: "Stickers & Labels",
    items: [
      "Circle Stickers", "Square Stickers", "Rectangle Stickers",
      "Custom Shape Stickers", "Gold/Silver Foil",
      "Product Packaging Labels", "Waterproof Labels",
    ],
  },
  {
    category: "Boxes & Packaging",
    items: [
      "Mailer Boxes", "Shipping Boxes", "Pizza Boxes",
      "Flat Mailer Boxes", "Paper Bags",
      "Stand-up Pouches",
    ],
  },
  {
    category: "Hospitality Essentials",
    items: [
      "Menu Cards", "Thank You Cards",
      "Drink Coasters",
    ],
  },
];

const services = [
  
  { category: "Business Essentials", image: img1 },
  { category: "Event Stationery", image: img1 },
  { category: "Personalized Gifts", image: img1 },
  { category: "Printed Promotional Materials", image: img1 },
  { category: "Packaging Accessories", image: img1 },
  { category: "Office Supplies & Tools", image: img1 },
  { category: "Stickers & Labels", image: img1 },
  { category: "Boxes & Packaging", image: img1 },
  { category: "Hospitality Essentials", image: img1 },
];

const OurServices = () => {
  const handleCategoryClick = (category) => {
    alert(`Go to ${category} page`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-26 px-6 md:px-26">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(service.category)}
            className="relative h-56 rounded-xl overflow-hidden shadow-md cursor-pointer group transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.category}
              className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105 opacity-80"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
            {/* Title */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <h2 className="text-2xl font-semibold text-white text-center">
                {service.category}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <section className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0f172a] mb-14">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {services1.map((section, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1e40af] mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                {section.category}
              </h2>
              <ul className="space-y-2 text-gray-700 text-base">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 hover:text-blue-900 transition-colors"
                  >
                    <span className="mt-1 text-blue-500">
                      <FaCheckCircle size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default OurServices;
