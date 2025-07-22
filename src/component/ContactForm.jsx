import React, { useRef, useState } from 'react';

import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'your_service_id',     // Replace with your EmailJS service ID
        'your_template_id',    // Replace with your EmailJS template ID
        form.current,
        'your_public_key'      // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert('Failed to send message. Try again!');
          console.error(error);
          setLoading(false);
        }
      );
  };

  // WhatsApp message handler
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const message = form.current.message.value;
    const phone = '+9193070 11622'; // Example: 91XXXXXXXXXX

    const encodedMsg = encodeURIComponent(
      `Hello, I am ${name}. ${message}`
    );

    window.open(`https://wa.me/${phone}?text=${encodedMsg}`, '_blank');
  };

  return (
    <section className="bg-gray-100 py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-medium px-6 py-2 rounded-md transition"
              disabled={loading}
            >
              <FaEnvelope /> {loading ? 'Sending...' : 'Send via Email'}
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition"
            >
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
