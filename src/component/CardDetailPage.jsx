import React from "react";
import { useParams, Link } from "react-router-dom";

// Import your images (adjust paths and imports as needed)
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
    image: sliceimg1,
    description: "High-quality professional business card design 1",
    details:
      "This is an extended detail about Business Card 1, including specs, design notes, and printing tips.",
  },
  {
    id: 2,
    title: "Pro Business Card 2",
    image: sliceimg2,
    description: "Elegant card with embossed finish 2",
    details:
      "Detailed description about Business Card 2, focusing on texture and finishing techniques.",
  },
  {
    id: 3,
    title: "Pro Business Card 3",
    image: sliceimg3,
    description: "Minimalist style with bold colors 3",
    details:
      "This card features a clean and minimalist design style, perfect for professionals.",
  },
  {
    id: 4,
    title: "Pro Business Card 4",
    image: sliceimg4,
    description: "Classic design with premium paper 4",
    details:
      "Designed with vibrant colors and creative layouts to stand out.",
  },
  {
    id: 5,
    title: "Pro Business Card 5",
    image: sliceimg5,
    description: "Modern and sleek layout 5",
    details:
      "A timeless design with classic fonts and layout to impress.",
  },
  {
    id: 6,
    title: "Pro Business Card 6",
    image: sliceimg6,
    description: "Creative typography focused 6",
    details:
      "Strong contrasts and bold typography make this card unique.",
  },
  {
    id: 7,
    title: "Pro Business Card 7",
    image: sliceimg7,
    description: "Professional and clean look 7",
    details:
      "Perfect for corporate professionals looking for sleek simplicity.",
  },
];

const CardDetailPage = () => {
  const { itemName, cardId } = useParams();

  const card = mockCards.find((c) => c.id === Number(cardId));

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
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-100 to-white flex flex-col items-center">
      <Link
        to={`/items/${encodeURIComponent(itemName)}`}
        className="self-start text-blue-600 underline mb-6 hover:text-blue-800"
      >
        ← Back to {decodeURIComponent(itemName)}
      </Link>

      <div className="w-[320px] bg-white rounded-[20px] shadow-lg font-sans relative overflow-hidden p-6">
        {/* Card header with SVG background */}
        <div className="h-[180px] w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <rect fill="#ffffff" width="540" height="450" />
            <defs>
              <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1={0}
                x2={0}
                y1={0}
                y2="100%"
                gradientTransform="rotate(222,648,379)"
              >
                <stop offset={0} stopColor="#ffffff" />
                <stop offset={1} stopColor="#FC726E" />
              </linearGradient>
              <pattern
                patternUnits="userSpaceOnUse"
                id="b"
                width={300}
                height={250}
                x={0}
                y={0}
                viewBox="0 0 1080 900"
              >
                {/* Add your polygon pattern or keep empty */}
              </pattern>
            </defs>
            <rect x={0} y={0} fill="url(#a)" width="100%" height="100%" />
            <rect x={0} y={0} fill="url(#b)" width="100%" height="100%" />
          </svg>
        </div>

        {/* Profile Image */}
        <div className="w-[128px] h-[128px] -mt-[64px] rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto relative z-10">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card content */}
        <h1 className="mt-6 text-2xl font-bold text-center text-gray-900">{card.title}</h1>
        <p className="text-center text-gray-600 mt-2 mb-4">{card.description}</p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 text-sm">
          {card.details}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-6 py-2 rounded-md border border-gray-700 text-gray-700 hover:bg-gray-100 transition">
            Contact
          </button>
          <button className="px-6 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;
