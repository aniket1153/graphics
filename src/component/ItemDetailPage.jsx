import React from "react";
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
    image: sliceimg1,
    description: "High-quality professional business card design 1",
  },
  {
    id: 2,
    title: "Pro Business Card 2",
    image: sliceimg2,
    description: "Elegant card with embossed finish 2",
  },
  {
    id: 3,
    title: "Pro Business Card 3",
    image: sliceimg3,
    description: "Minimalist style with bold colors 3",
  },
  {
    id: 4,
    title: "Pro Business Card 4",
    image: sliceimg4,
    description: "Classic design with premium paper 4",
  },
  {
    id: 5,
    title: "Pro Business Card 5",
    image: sliceimg5,
    description: "Modern and sleek layout 5",
  },
  {
    id: 6,
    title: "Pro Business Card 6",
    image: sliceimg6,
    description: "Creative typography focused 6",
  },
  {
    id: 7,
    title: "Pro Business Card 7",
    image: sliceimg7,
    description: "Professional and clean look 7",
  },
  {
    id: 8,
    title: "Pro Business Card 8",
    image: sliceimg1,
    description: "Bold contrast with modern flair 8",
  },
];

const ItemDetailPage = () => {
  const { itemName } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10">
      <Link
        to="/"
        className="text-gray-700 hover:text-gray-900 font-semibold mb-8 inline-block transition-colors"
      >
        ← Back to Services
      </Link>

      <h1 className="text-5xl font-extrabold text-center mb-14 text-gray-900 tracking-wide">
        {decodeURIComponent(itemName)}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {mockCards.map(({ id, title, image, description }) => (
          <Link
            key={id}
            to={`/items/${encodeURIComponent(itemName)}/cards/${id}`}
            className="relative rounded-2xl border border-gray-300 bg-white shadow-md overflow-hidden cursor-pointer group
              transform transition-transform duration-400 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-60 object-cover transition-transform duration-400 group-hover:scale-105"
            />

            {/* Info panel sliding up on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent
                px-6 py-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-400"
            >
              <h3 className="text-2xl font-semibold mb-1">{title}</h3>
              <p className="text-sm tracking-wide">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemDetailPage;
