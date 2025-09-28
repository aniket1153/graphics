import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Import your images
import sliceimg1 from "../assets/sliceimg1.jpg";
import sliceimg2 from "../assets/sliceimg2.png";
import sliceimg3 from "../assets/sliceimg3.png";
import sliceimg4 from "../assets/sliceimg4.png";
import sliceimg5 from "../assets/sliceimg5.jpg";
import sliceimg6 from "../assets/sliceimg6.jpg";
import sliceimg7 from "../assets/sliceimg7.jpg";

const mockCards = [
  {
    id: 1,
    title: "Pro Business Card 1",
    images: [sliceimg1, sliceimg2, sliceimg3, sliceimg4, sliceimg5],
    description: "High-quality professional business card design 1",
    details:
      "Printed on premium 350gsm matte paper with optional glossy finish. Ideal for executives, consultants, and entrepreneurs. Dimensions: 3.5 x 2 inches.",
  },
  {
    id: 2,
    title: "Pro Business Card 2",
    images: [sliceimg2, sliceimg3, sliceimg4, sliceimg6, sliceimg7],
    description: "Elegant card with embossed finish 2",
    details:
      "Embossed finish for tactile appeal. Customizable fonts and colors. Available in standard and premium formats.",
  },
  // Add more cards with multiple images if needed
];

const CardDetailPage = () => {
  const { itemName, cardId } = useParams();
  const card = mockCards.find((c) => c.id === Number(cardId));

  const [selectedImage, setSelectedImage] = useState(
    card?.images ? card.images[0] : null
  );

  if (!card) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <p className="text-xl font-semibold text-gray-700">Card not found</p>
        <Link
          to={`/items/${encodeURIComponent(itemName)}`}
          className="text-blue-600 underline mt-4"
        >
          ← Back to {decodeURIComponent(itemName)}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-7xl mx-auto mt-15">
      {/* Left Section: Images */}
      <div className="flex-1">
        {/* Big image */}
        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-white">
          <img
            src={selectedImage}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails carousel */}
        <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
          {card.images.map((img, idx) => (
            <div
              key={idx}
              className={`w-24 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                selectedImage === img
                  ? "border-gray-900"
                  : "border-transparent hover:border-gray-400"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`${card.title} ${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Product Info */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900">{card.title}</h1>
        <p className="mt-2 text-lg text-gray-600">{card.description}</p>

        <div className="mt-6 border-t pt-6 text-gray-700 leading-relaxed">
          {card.details}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-md border border-gray-800 text-gray-800 font-semibold hover:bg-gray-100 transition">
            Contact Designer
          </button>
          <button className="px-6 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition">
            Order Now
          </button>
        </div>

        {/* Back Link */}
        <Link
          to={`/items/${encodeURIComponent(itemName)}`}
          className="block mt-6 text-sm text-blue-600 underline hover:text-blue-800"
        >
          ← Back to {decodeURIComponent(itemName)}
        </Link>
      </div>
    </div>
  );
};

export default CardDetailPage;
