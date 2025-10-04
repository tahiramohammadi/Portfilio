import { useEffect, useState } from "react";
import axios from "axios";
import react from "react";
import { FaDownload } from "react-icons/fa";
const About = () => {

    const [error, setError] = useState(null);
 
    const [abouts, setAbout] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/abouts")
            .then(response => {
                console.log(response.data);  // Debug API response
                setAbout(response.data);
            })
            .catch(error => console.error("Error fetching about section:", error));
    }, []);

    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!abouts) return <p>Loading...</p>;

    return (
        <section id="about" className="container py-6 mx-auto lg:px-35 md:px-35 px-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 ">
          

    {/* Right Side (Bio, Skills, CV) */}
    <div className="flex-1">
        <div>

            
            <h2 className="text-2xl lg:text-5xl font-black  lg:w-100 leading-normal">I love being a developer!</h2>
            <p className="text-xl lg:text-2xl  text-gray-700 leading-relaxed">{abouts.bio}</p>
        </div>

   

        <div className="mt-4">
            {abouts.cv_file? (
                <a
                    href={`http://127.0.0.1:8000/storage/images/${abouts.cv_file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className=" border-1  border-[#F8B400] w-60 flex items-center border-dotted justify-between shadow gap-2 text-black rounded-full shadow hover:bg-[#F8B400] hover:text-white transition"
                    
                >
              
              <span className=" pl-6 text-xl">Download CV </span>
              <span className="bg-[#F8B400] text-white text-2xl py-4 px-4 flex items-center justify-center rounded-full h-full "><FaDownload/> </span>
                </a>
            ) : (
                <p>No CV available</p>
            )}


        </div>
        </div>
    <div className="flex-shrink-0 ">
        {abouts.profile_image ? (
            <img
                src={`http://127.0.0.1:8000/storage/images/${abouts.profile_image}`}
                alt="About Me"
                className=""
            />
        ) : (
            <p>No image available</p>
        )}
    </div>
    
    
        </section>
    );
}

export default About;


