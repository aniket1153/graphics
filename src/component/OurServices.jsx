import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
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

const OurServices = () => {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0f172a] mb-14">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((section, idx) => (
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
  );
};

export default OurServices;
