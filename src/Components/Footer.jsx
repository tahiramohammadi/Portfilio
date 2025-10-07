import React from "react";
import { FaCoffee, FaHeart } from "react-icons/fa";
import Social_link from "./social_link";

const Footer = () => {
  return (
    <section className="pt-20">
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start">
            <Social_link />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-right text-sm sm:text-base lg:text-lg font-medium">
            <p className="flex items-center justify-center flex-wrap gap-2 text-gray-300">
              Made with{" "}
              <FaHeart className="text-red-500 inline w-5 h-5" /> and{" "}
              <FaCoffee className="text-yellow-600 inline w-5 h-5" /> from 2024-2025
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;