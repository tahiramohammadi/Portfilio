import React, { useState, useEffect } from 'react';

import { FaCoffee, FaHeart} from "react-icons/fa";
import Social_link from './social_link';
const Footer = () => {



  return (

 <>
    
 <section className="pt-20">
    <footer class="bg-gray-900 text-white py-4 ">
  <div class=" container mx-auto lg:px-30 md:px-30 flex justify-between items-center">
    <div>
    <Social_link/>
    </div>
    <div class="flex space-x-4">
     <p className='text-xl font-bold'>made with <FaHeart className="w-5 h-5 text-red-500 inline"/> and  <FaCoffee className="w-5 h-5 text-brown-500 inline"/> from 2024-2025</p>
    </div>
  </div>
</footer>
</section>
      </>
  );
};

export default Footer;