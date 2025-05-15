import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[url('https://i.postimg.cc/S2SZqPxG/13.jpg')] bg-cover bg-center text-[#3e2723] py-12 px-6 md:px-20 font-sans mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="https://i.postimg.cc/4KJvh9Rf/logo1.png
" alt="Logo" className="h-10" />
            <h2 className="text-2xl font-semibold">Espresso Emporium</h2>
          </div>
          <p className="mb-4 max-w-md">
            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
          </p>

          <div className="flex gap-4 text-xl mb-6">
            <FaFacebookF className="hover:text-[#d8a654] cursor-pointer" />
            <FaTwitter className="hover:text-[#d8a654] cursor-pointer" />
            <FaInstagram className="hover:text-[#d8a654] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#d8a654] cursor-pointer" />
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FaPhone /> <span>+88 01533 333 333</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> <span>info@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Connect with Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-[#e3b577] hover:bg-[#d8a654] text-black font-semibold px-6 py-2 rounded border border-[#3e2723]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
