


import { useEffect, useState } from "react";
import react from "react";


const HireMe= () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return (
       
        
    <section  className=" container mt-20 mx-auto h-45  bg-[#F8B400] lg:px-35 md:px-35">
      <div classname=" px-4 grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2 ">
      <div className=" flex  flex-col lg:flex-row items-center py-10 ">
         <div className="flex-1">
        <h1 className="text-white font-bold text-xl lg:text-3xl py-4 ">I am Available For Remote Jobs !</h1>
      </div>
      <div className="flex-shrink-0">
      <button onClick={() => scrollToSection("contacts")}  className="p-3 text-black text-sm  cursor-pointer rounded-lg font-bold bg-white">Hire Me Now</button>
      </div>
      </div>
      </div>
                
        </section>
  
  
    );
}

export default HireMe;




