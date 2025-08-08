import React, { useRef, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        form.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message. Try again!");
          console.error(error);
          setLoading(false);
        }
      );
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const message = form.current.message.value;
    const phone = "+919307011622"; // Your phone number

    const encodedMsg = encodeURIComponent(`Hello, I am ${name}. ${message}`);

    window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24 min-h-screen flex items-center justify-center">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 shadow-lg rounded-xl overflow-hidden">
        {/* Left side - Google Map */}
        <div className="w-full h-96 lg:h-auto">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019559315687!2d-122.41941508468127!3d37.77492977975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e22e3d43%3A0xc68e0a8aa8b7d64c!2sSan%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1691506786158!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0 rounded-l-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-gray-50 p-10 rounded-r-xl flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
            Get in Touch
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your full name"
                className="w-full px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-3 focus:ring-blue-600 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="your.email@example.com"
                className="w-full px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-3 focus:ring-blue-600 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                className="w-full px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-3 focus:ring-blue-600 transition resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold px-8 py-3 rounded-md shadow-md transition"
              >
                <FaEnvelope size={20} />
                {loading ? "Sending..." : "Send via Email"}
              </button>

              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-3 bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md shadow-md transition"
              >
                <FaWhatsapp size={20} />
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
