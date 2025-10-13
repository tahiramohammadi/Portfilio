
import React from "react";

import { FaMapMarked, FaComment, FaPhoneVolume} from "react-icons/fa";
const  ContactDetail= () => {
  return (
          <>
              <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 md:grid-cols-3">
          <div className=" p-10 shadow-lg col-span-1 ">
              <h2 className="font-bold  text-2xl">What is your plan? <br/> Call me</h2>
              <p className="text-gray-700 font-semibold">You can get my contact information here or you can see the urls of my pages on social networks from the top and the bottom of the page and find me there.</p>
        
              <div className="flex flex-col font-bold py-6">
              
                      <span className="flex py-2 "> <span className="text-[#F8B400]  text-xl  pr-2"><FaMapMarked/></span> Afghanistan, Kabul, 13 area</span>
            
                      <span className="flex  py-2 "> <span className="text-[#F8B400]  text-xl   pr-2"><FaComment /></span>tahiramohammadi2019@gamil.com</span>
                      <span className="flex  py-2"> <span className="text-[#F8B400]  text-xl  pr-2"><FaPhoneVolume /></span>+93748232511</span>
                
              </div>
          </div>
          </div>
          </>
   
  );
};

export default ContactDetail;
