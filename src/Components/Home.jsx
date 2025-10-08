import react from "react"

import Baha from '../assets/Baha.jpg'
import { useState, useEffect } from "react";
import Social_link from './Social_link'

const Home =()=>{
  const roles = ["Full Stack Developer", "IT Support"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);


    return (
 
        
    <section   id="home" className="  min-h-screen bg-white overflow-hidden relative w-full  items-center relative container mx-auto">
    <div className="absolute hidden w-3/4 lg:block top-0 right-0  h-full bg-[#FEF7E5] lg:w-1/2 clip-right-circle"></div>
     <div className="container  mx-auto flex flex-col  md:flex-row  justify-between relative ">
      <div className="flex lg:px-25  lg:justify-start  w-full md:w-1/2 lg:w-1/2 lg:justify-start  justify-center">
      <img
 src={Baha}
 alt="Profile"
 className=" w-full lg:w-150 " />
      </div>

      </div>
      <div className=" lg:bg-transparent   text-center lg:top-60  md:bg-transparent absolute z-0 opacity-80 bottom-0  bg-[#FEF7E5]  
         w-full 
         md:text-left
         py-6 
             
           
         lg:text-left
         lg:left-200
        ">
         <h2 className="text-[#F8B400] text-lg font-medium leading-relaxed lg:text-3xl md:text-xl">Hi There, I'm</h2>
          <h1 className="text-3xl md:w-100 font-black text-black leading-normal lg:text-6xl md:text-2xl">
          <span className=" ">Tahira </span>
          Mohammadi</h1>
          <div className="text-2xl  lg:text-3xl font-bold text-[#F8B400]">
      <span>{text}</span>
      <span className="animate-blink">|</span>
             </div>
            
<Social_link/>

          </div> 
        
    </section>
             
     
    )
}
export default Home;


 <Social_link/>  