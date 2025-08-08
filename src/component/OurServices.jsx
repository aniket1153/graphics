import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaGift,
  FaPrint,
  FaBox,
  FaPen,
  FaTags,
  FaCubes,
  FaUtensils,
  FaIdCard,
  FaBook,
  FaRegCalendarCheck,
  FaStickyNote,
  FaClipboardList,
  FaMugHot,
  FaRegEnvelope,
  FaRegFileAlt,
  FaImage,
  FaLayerGroup,
  FaShoppingBag,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Category Icons (top of back card)
const categoryIcons = {
  "Business Essentials": <FaBriefcase className="text-blue-700" size={22} />,
  "Event Stationery": <FaCalendarAlt className="text-purple-700" size={22} />,
  "Personalized Gifts": <FaGift className="text-pink-700" size={22} />,
  "Printed Promotional Materials": <FaPrint className="text-orange-600" size={22} />,
  "Packaging Accessories": <FaBox className="text-yellow-600" size={22} />,
  "Office Supplies & Tools": <FaPen className="text-green-600" size={22} />,
  "Stickers & Labels": <FaTags className="text-red-600" size={22} />,
  "Boxes & Packaging": <FaCubes className="text-indigo-600" size={22} />,
  "Hospitality Essentials": <FaUtensils className="text-teal-600" size={22} />,
};

// Item-specific icons
const itemIcons = {
  "Business Cards": <FaIdCard className="text-blue-500 mt-1" />,
  Certificates: <FaClipboardList className="text-green-500 mt-1" />,
  Letterheads: <FaRegFileAlt className="text-gray-600 mt-1" />,
  "Document Printing": <FaPrint className="text-orange-500 mt-1" />,
  Brochures: <FaBook className="text-purple-500 mt-1" />,
  Cards: <FaRegEnvelope className="text-pink-500 mt-1" />,
  Notepads: <FaStickyNote className="text-yellow-500 mt-1" />,

  "ID Cards": <FaIdCard className="text-blue-500 mt-1" />,
  Invitations: <FaRegEnvelope className="text-pink-500 mt-1" />,
  Bookmarks: <FaBook className="text-green-500 mt-1" />,
  "Thank You Cards": <FaRegEnvelope className="text-purple-500 mt-1" />,
  Notebooks: <FaBook className="text-indigo-500 mt-1" />,
  Calendars: <FaRegCalendarCheck className="text-red-500 mt-1" />,
  Diaries: <FaBook className="text-brown-500 mt-1" />,

  "Photo Frames": <FaImage className="text-yellow-500 mt-1" />,
  "Photo Prints": <FaImage className="text-pink-500 mt-1" />,
  "Photo Mugs": <FaMugHot className="text-orange-500 mt-1" />,
  "Photo Wall Calendars": <FaRegCalendarCheck className="text-blue-500 mt-1" />,
  "Greeting Cards": <FaRegEnvelope className="text-green-500 mt-1" />,

  "Flyers and Leaflets": <FaLayerGroup className="text-indigo-500 mt-1" />,
  "Post Cards": <FaRegEnvelope className="text-teal-500 mt-1" />,
  Posters: <FaLayerGroup className="text-purple-500 mt-1" />,
  Booklets: <FaBook className="text-orange-500 mt-1" />,
  Danglers: <FaTags className="text-red-500 mt-1" />,

  "Packaging Sleeves": <FaBox className="text-yellow-500 mt-1" />,
  Tags: <FaTags className="text-pink-500 mt-1" />,
  "Packaging Labels": <FaTags className="text-green-500 mt-1" />,

  Envelopes: <FaRegEnvelope className="text-purple-500 mt-1" />,
  "Bill Books": <FaBook className="text-indigo-500 mt-1" />,
  Pens: <FaPen className="text-gray-500 mt-1" />,
  Mousepads: <FaLayerGroup className="text-blue-500 mt-1" />,

  "Circle Stickers": <FaTags className="text-red-500 mt-1" />,
  "Square Stickers": <FaTags className="text-green-500 mt-1" />,
  "Rectangle Stickers": <FaTags className="text-purple-500 mt-1" />,
  "Custom Shape Stickers": <FaTags className="text-yellow-500 mt-1" />,
  "Gold/Silver Foil": <FaTags className="text-gray-500 mt-1" />,
  "Product Packaging Labels": <FaTags className="text-pink-500 mt-1" />,
  "Waterproof Labels": <FaTags className="text-blue-500 mt-1" />,

  "Mailer Boxes": <FaBox className="text-orange-500 mt-1" />,
  "Shipping Boxes": <FaCubes className="text-indigo-500 mt-1" />,
  "Pizza Boxes": <FaBox className="text-red-500 mt-1" />,
  "Flat Mailer Boxes": <FaBox className="text-green-500 mt-1" />,
  "Paper Bags": <FaShoppingBag className="text-brown-500 mt-1" />,
  "Stand-up Pouches": <FaShoppingBag className="text-yellow-500 mt-1" />,

  "Menu Cards": <FaRegEnvelope className="text-pink-500 mt-1" />,
  "Drink Coasters": <FaMugHot className="text-rown-500 mt-1" />,
};

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
    items: ["Packaging Sleeves", "Tags", "Packaging Labels"],
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
    items: ["Menu Cards", "Thank You Cards", "Drink Coasters"],
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-24">
      <motion.h1
        className="text-4xl font-extrabold text-center text-blue-900 mb-14 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Services
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services1.map((section, idx) => (
          <motion.div
            key={idx}
            className="group perspective"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-white to-blue-50 border border-blue-200 rounded-2xl shadow-lg flex items-center justify-center p-6 backface-hidden group-hover:shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <h2 className="text-2xl font-semibold text-blue-800 text-center">
                  {section.category}
                </h2>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-white border border-blue-200 rounded-2xl shadow-lg p-6 overflow-hidden transform rotate-y-180 backface-hidden">
                <div className="flex items-center gap-3 mb-4">
                  {categoryIcons[section.category]}
                  <h3 className="text-xl font-serif font-bold text-blue-700">
                    {section.category}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 hover:text-blue-800 transition-colors text-lg"
                    >
                      {itemIcons[item] || <FaTags className="text-gray-400" />}
                        <Link to={`/items/${encodeURIComponent(item)}`} className="hover:underline">
        {item}
      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom flip styles */}
      <style>
        {`
          .perspective {
            perspective: 1200px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
};

export default OurServices;
