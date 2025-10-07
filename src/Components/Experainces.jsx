
import { useEffect, useState } from "react";
import axios from "axios";
import react from "react";
 import Education from './Education'
import ExperainceDetail from './ExperainceDetail'

const Experainces = () => {

    const [error, setError] = useState(null);
    
    const [experiences, setExperience] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/experiences")
            .then(response => {
                console.log(response.data);  // Debug API response
                setExperience(response.data);
            })
            .catch(error => console.error("Error fetching about section:", error));
    }, []);

    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!experiences) return <p>Loading...</p>;

    return (
        <section id="about" className="lg:px-35 md:px-35 container py-10 mx-auto" >
           <div className="flex flex-col  justify-center py-6 px-4 items-center text-center">
            <h2 className="text-3xl font-black leading-relaxed  uppercase title hover:border-b-4 hover:border-[#F8B400]">Experience & Education</h2>
            <p className=" text-gray-700 lg:w-180 leading-relaxed  py-6 text-sm lg:text-lg font-semibold ">One of the most beautiful aspects of every person's life is their professional journey, and I feel incredibly fortunate to have spent this part of my life with the people I love and respect. Their support and the shared experiences have only deepened my passion for my work, driving me to grow and evolve in every aspect of my career.</p>
           </div>
      <div className="px-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 ">       

    {/* Right Side (Bio, Skills, CV) */}
    <div className="flex-1">
       
    <ExperainceDetail 
    experiences={experiences}
    />

        </div>
    <div className="flex-shrink-0 ">

      
    <Education/>       
  
    </div>
    
    </div> 
        </section>
    );
}

export default Experainces;




