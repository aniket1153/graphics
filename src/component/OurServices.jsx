import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    category: "Business Essentials",
    items: [
      "Business Cards", "Certificates", "Letterheads", "Document Printing",
      "Brochures", "Cards", "Notepads", "Acrylic Table Top Stands",
    ],
  },
  {
    category: "Event Stationery",
    items: [
      "ID Cards", "Invitations", "Bookmarks", "Thank You Cards",
      "Notebooks", "Calendars", "Diaries", "Riteon Notebooks",
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
      "Tent Cards", "Danglers",
    ],
  },
  {
    category: "Packaging Accessories",
    items: [
      "Packaging Sleeves", "Tags", "Holographic Stickers",
      "Packaging Labels", "Pre-printed Gift Wrapping Papers",
    ],
  },
  {
    category: "Office Supplies & Tools",
    items: [
      "Letterheads", "Envelopes", "Rubber Stamps", "Bill Books",
      "Presentation Folders", "Foiled Certificates", "Pens",
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
      "Flat Mailer Boxes", "Paper Bags", "Courier Bags",
      "Stand-up Pouches",
    ],
  },
  {
    category: "Hospitality Essentials",
    items: [
      "Menu Cards", "Tent Cards", "Thank You Cards",
      "Drink Coasters", "Door Hangers", "Placemats",
    ],
  },
];

const OurServices = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] min-h-screen px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f172a] mb-14">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((section, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-[#1e40af] mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                {section.category}
              </h2>
              <ul className="space-y-2 text-gray-700 text-base">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 hover:text-[#1e3a8a] transition">
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
    </div>
  );
};

export default OurServices;
