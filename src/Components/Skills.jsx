import { useEffect, useState } from "react";
import axios from "axios";
import react from "react";
import AnimatedNumber from './AnimatedNumber'
import PrograssBar from './PrograssBar'
const Skills = () => {
    skills: []
    level: []
    const [error, setError] = useState(null);
 
    const [abouts, setAbout] = useState(null);
    // Create state to hold the animated level value
    const [level, setLevel] = useState(0);
    
 

    useEffect(() => {


        const fetchAboutData = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:8000/api/abouts');
              const data = response.data;
      
              // Parse the skills JSON string into an array
              if (data.skills && typeof data.skills === 'string') {
                data.skills = JSON.parse(data.skills); // Parse the string to an array
              }
              if (data.level && typeof data.level === 'string') {
                data.level = JSON.parse(data.level); // Parse the string to an array
              }
      
              setAbout(data);
            } catch (error) {
              console.error('Error fetching about data:', error);
            }
          };

      
          fetchAboutData();
        }, []);
      

    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!abouts) return <p>Loading...</p>;

    return (
        <section id="about" className="container bg-[#FEF7E5] py-6 mx-auto lg:px-35 md:px-35 px-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 ">
          

    {/* Right Side (Bio, Skills, CV) */}
    <div className="flex-1">
       

        <div>
<h2 className="text-2xl font-bold py-3">Skills</h2>
<p className=" text-gray-700 leading-relaxed "> One of the fascinations of the computer world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies.</p>
{Array.isArray(abouts.skills) && abouts.skills.length > 0 ? (
    <ul className="grid grid-cols-4 gap-6 w-full max-w-4xl py-4">
      {abouts.skills.map((skill, index) => (
        <li key={index} className=" flex flex-col items-center  lg:pr-18 ">
          <div className=" text-black   w-16 h-16 ">
          < PrograssBar  value={abouts.level[index]} /> {/* This displays the level number inside the circle */}
          </div>
          <p className="mt-2 font-bold  text-gray-700">{skill}</p> {/* The skill name under the number */}
        </li>
      ))}
    </ul>
  ) : (
    <p>No skills data available or incorrect format.</p>
  )}
        </div>

   

     


        </div>
    
    <div className="flex-shrink-0 ">
   <h2 className="text-2xl font-bold py-3  ">Language Skills</h2>
   <p className=" text-gray-700 leading-relaxed">One of my greatest interests is the study and mastery of languages. I am dedicated to learning and effectively using my favorite languages, constantly striving to expand my linguistic skills.</p>

   <ul className="grid grid-cols-2 gap-4 w-full max-w-4xl  py-6">
   <li className="flex flex-row items-center ">
           <div className="bg-white w-70 h-22 pl-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-4 flex items-center border-1 border-gray-100">
   <div className=" text-white  bg-[#F8B400] w-16 h-16 flex items-center justify-center rounded-full">
   <AnimatedNumber value={85}/>
       
          </div>
          <p className="font-bold  text-gray-700 p-4 ">English</p>
          </div>
</li>
<li  className="flex flex-row items-center">
<div className="bg-white w-70 h-22 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-4   pl-4 flex items-center border-1 border-gray-100">
<div className=" text-white bg-[#F8B400]  w-16 h-16 flex items-center justify-center rounded-full text-lg  font-bold">
    <AnimatedNumber value={99}/>
       </div>
       <p className="font-bold  text-gray-700 p-4 ">Persian</p>
       </div>
        </li>
   </ul>
    </div>
    
    
        </section>
    );
}



export default Skills;



