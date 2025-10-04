import React, { useState, useEffect } from 'react';
  import Baha from "../assets/Baha.jpg"
  // import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Change to background color when scrolled more than 50px
    } else {
      setIsScrolled(false); // Revert to original background
    }
  };
  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};
  return (

 <>
    
 
        <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className="container  mx-auto lg:px-30 md:px-30 px-4 text-lg font-bold font-source-sans   top-0 w-full z-20  flex items-center justify-between py-4">
          {/* Brand / Logo */}
          <div className="text-3xl cursor-pointer  py-2 ">Tahira BAHA</div>

          {/* Desktop Menu */}
          <ul className="hidden   mr-4 md:flex space-x-6 ">
          
            <li  className=" bg-[#F8B400]   py-2 px-6  rounded-full   text-white">
            <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li className=" hover:bg-[#F8B400] py-2 px-6  hover:rounded-full  hover:text-white">
            <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li  className=" hover:bg-[#F8B400]  py-2 px-6  hover:rounded-full hover:text-white">
            <button onClick={() => scrollToSection("services")}>Services</button>
            </li>
            <li className=" hover:bg-[#F8B400]   py-2 px-6   hover:rounded-full hover:text-white">
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
            <li  className=" hover:bg-[#F8B400]   py-2 px-6   hover:rounded-full  hover:text-white">
            <button onClick={() => scrollToSection("contacts")}>Contact</button>
            </li>
            <li  className="hover:bg-[#F8B400]   py-2 px-6   hover:rounded-full hover:text-white">
            <button onClick={() => scrollToSection("English")}>English</button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white bg-[#F8B400] p-2 px-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (dropdown) */}
        {isOpen && (
          <ul className="fixed top-20 left-4 right-4  text-lg  font-bold font-source-sans   bg-white md:hidden   px-4 pb-4 pt-4  shadow-md flex flex-col space-y-4">
            <li  className="   pb-2 hover:text-[#F8B400] border-b border-gray-300">
            <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li  className="  pb-2 hover:text-[#F8B400] border-b border-gray-300">
            <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li  className="  pb-2 hover:text-[#F8B400] border-b border-gray-300">
            <button onClick={() => scrollToSection("services")}>Services</button>
            </li>
            <li className="  pb-2 hover:text-[#F8B400] border-b border-gray-300">
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
            <li  className="  pb-2 hover:text-[#F8B400] border-b border-gray-300">
            <button onClick={() => scrollToSection("contacts")}>Contact</button>
            </li>
            <li  className="pb-2 hover:text-[#F8B400] border-b border-gray-300">
             <button onClick={() => scrollToSection("English")}>English</button>
            </li>
          </ul>
        )}

        {/* HERO / MAIN SECTION */}
         
        
      </nav>
    
      {/* <Outlet />    */}
      </>
  );
};

export default Navbar;