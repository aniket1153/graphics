import React from "react";
import { FaCheckCircle } from "react-icons/fa";

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
      "Flyers and Leaflets", "Post Cards", "Posters", "Booklets", "Danglers",
    ],
  },
  {
    category: "Packaging Accessories",
    items: [
      "Packaging Sleeves", "Tags", "Packaging Labels",
    ],
  },
  {
    category: "Office Supplies & Tools",
    items: [
      "Letterheads", "Envelopes", "Bill Books", "Pens",
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
      "Flat Mailer Boxes", "Paper Bags", "Stand-up Pouches",
    ],
  },
  {
    category: "Hospitality Essentials",
    items: [
      "Menu Cards", "Thank You Cards", "Drink Coasters",
    ],
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6 md:px-24">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-14">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services1.map((section, idx) => (
          <div
            key={idx}
            className="group perspective"
          >
            <div className="relative w-full h-72 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-md flex items-center justify-center p-6 backface-hidden">
                <h2 className="text-2xl font-semibold text-blue-800 text-center">
                  {section.category}
                </h2>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-blue-50 border border-blue-200 rounded-2xl shadow-md p-6 overflow-hidden transform rotate-y-180 backface-hidden">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {section.category}
                </h3>
                <ul className="space-y-2 text-blue-900 text-sm">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Tailwind styles */}
      <style>
  {`
    .perspective {
      perspective: 1000px;
    }
    .transform-style-preserve-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
      transition: transform 5s ease-in-out;
    }
    .flip-container {
      transition: transform 0.7s ease-in-out;
      transform-style: preserve-3d;
    }
  `}
</style>

    </div>
  );
};

export default OurServices;
