import react from 'react'
import { FaBriefcase } from "react-icons/fa";

const ExperianceDetail=({ experiences})=>{

return (
    <div className="container mx-auto grid gap-6 h-400">
    {experiences.length > 0 ? (
      experiences.map((exp, index) => (
  
        <div key={index} className="bg-white border-gray-200 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-8">
            <div className="flex justify-between pb-4">
                 
            <img 
                        src={`http://127.0.0.1:8000/storage/images/${exp.logo}`} 

                        className="w-15 h-15 object-contain "
                                           />  

             <div className="flex items-center">
             <div className="bg-[#F8B400] rounded-full p-4 flex items-center justify-center">
        <FaBriefcase className="text-white text-xl" />
      </div>
         
          <span  className="bg-[#F8B400] text-white font-semibold px-2 py-1  ml-[-6px]">{exp.date}</span> 
         </div>
            </div>
         
                  
                    
               
          <h3 className="text-lg font-bold text-gray-800 leading-relaxed pt-4">

            {exp.title} - {exp.company} <span className="text-[#F8B400] font-semibold">({exp.insert_type})</span>
          </h3>

    
       
          <ul className="list-none list-inside text-gray-700 mt-2">
            {exp.description.split("\n").map((desc, i) => (
              <li key={i} className="before:content-['✔️'] leading-relaxed">{desc}</li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-3">No experiences found</p>
    )}
  </div>
  )
}

export default ExperianceDetail;