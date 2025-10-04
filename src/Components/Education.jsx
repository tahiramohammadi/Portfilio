


import { useEffect, useState } from "react";
import axios from "axios";
import react from "react";

import { FaBriefcase } from "react-icons/fa";

const Education = () => {
    const [error, setError] = useState(null);
    const [education, setEucation] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/education")
            .then(response => {
                console.log(response.data);  // Debug API response
                setEucation(response.data);
            })
            .catch(error => console.error("Error fetching education section:", error));
    }, []);

    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!education) return <p>Loading...</p>;

    return (
       
        
    <div className="container mx-auto grid gap-6 h-230 ">
    {education.length > 0 ? (
      education.map((edu, index) => (
  
        <div key={index} className="bg-white border-gray-200 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-8">
            <div className="flex justify-between pb-4">
            <img 
                        src={`http://127.0.0.1:8000/storage/images/${edu.logo}`} 

                        className="w-15 h-15 object-contain "
                                           />  
             <div className="flex items-center">
             <div className="bg-[#F8B400] rounded-full p-4 flex items-center justify-center">
        <FaBriefcase className="text-white text-xl" />
      </div>
      <span className="bg-[#F8B400] text-white font-semibold px-2 py-1  ml-[-6px]">{edu.from_year}-{edu.to_year}</span>
         </div>

            </div>
         
            <h3 className="text-lg font-bold text-gray-800 leading-relaxed pt-4">

 {edu.degree}
</h3>   
                    
               
          <h3 className="text-lg font-bold text-gray-800 leading-relaxed pt-4">

            {edu.institute} - {edu.field_of_study}
          </h3>
            
          <ul className="list-none list-inside text-gray-700 mt-2">
            {edu.description.split("\n").map((desc, i) => (
              <li key={i} className="before:content-['✔️'] leading-relaxed">{desc}</li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-3">No experiences found</p>
    )}
  </div>
  
    );
}

export default Education;




