

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Laravel API
    axios.get("http://localhost:8000/api/projects") // Laravel API URL
      .then(response => {
        console.log("Data received:", response.data); 
        setProjects(response.data); // Store data in state
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch data');
        setLoading(false);
        console.error(error);
      });
  }, []); 
  console.log("projects state:", projects);
  // Empty dependency array means it runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="projects" className="bg-[#FEF7E5] container mx-auto lg:px-35 md:px-35 py-20 ">
    <div className="flex flex-col items-center ">
      <h1 className="lg:text-4xl text-2xl font-bold leading-relaxed py-3">I Love What I Do</h1>
           <p className=" lg:w-180 font-semibold text-gray-700 text-lg px-4 text-center leading-relaxed py-2 ">Creating is always attractive and I tried to never deprive myself of this pleasure,
            here you can see the projects desgined by me.</p>
           </div>
         
      {/* Check if data exists */}
      {projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 px-4 ">
          {projects.map((project) => (
            <div key={project.id} className="relative cursor-pointer bg-white group shadow-lg transition-transform duration-300 hover:scale-95 hover:border-6  hover:border-[#F8B400]">
                <img 
                        src={`http://127.0.0.1:8000/storage/images/${project.image}`} 

                        className=" w-full object-contain"
                                           />  
            <div className="absolute inset-0 bg-black  bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-70">
 
            <div className="px-6 py-6">
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold  rounded-lg text-xl py-2 px-7"
                >
                {project.title}
                </a>
              )}
              </div>
    <div className="absolute bottom-0 right-0  bg-[#F8B400] w-12 h-12 flex items-center justify-center  duration-300 ">
          <FaEye className="text-white text-2xl" />
        </div>
  </div>

  
              <h2 className="text-xl font-semibold  py-4 px-6">{project.title}</h2>
              <p className="text-gray-700  pb-8 px-6">{project.description}</p>

              {/* <div className="px-6 py-6">
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:bg-black  bg-[#F8B400] text-white font-bold  rounded-lg text-lg py-2 px-7"
                >
                  GitHub
                </a>
              )}
              </div> */}
         
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Project;