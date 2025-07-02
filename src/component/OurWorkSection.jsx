import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

const teamMembers = [
  {
    name: 'Natalie Paisley',
    role: 'CEO / Co-Founder',
    image: img1
  },
  {
    name: 'Daniel Thompson',
    role: 'CTO / Developer',
    image: img2
  },
  {
    name: 'Sarah Collins',
    role: 'UI/UX Designer',
    image: img3
  },
  {
    name: 'James Carter',
    role: 'Marketing Head',
    image: img2
  },
  {
    name: 'Emma Watson',
    role: 'Content Manager',
    image: img3
  },
  {
    name: 'Lucas Smith',
    role: 'Project Manager',
    image: img1
  }
];

const OurWorkSection = () => {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4 text-blue-600">
              <FaFacebook className="cursor-pointer hover:text-blue-800" />
              <FaTwitter className="cursor-pointer hover:text-sky-500" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkSection;
