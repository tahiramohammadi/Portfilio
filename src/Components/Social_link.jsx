

import react from "react"
import axios from "axios"
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";


const iconMap = {
  FaFacebook: FaFacebookF,
  FaTwitter: FaTwitter,
  FaLinkdin: FaLinkedinIn,
  FaGitHub: FaGithub,
};


export default function Social_link() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/social-links")
      .then((response) => {
        setLinks(response.data); // Assuming Laravel returns an array of social links
      })
      .catch((error) => {
        console.error("Error fetching links:", error);
        setError("Failed to load social links");
      });
  }, []);
  return (
  

<div className=" flex justify-center lg:justify-start gap-4 mt-6">
{links.map((link) => {
  const IconComponent = iconMap[link.icon]; // Dynamically get the icon component

  return (
    <a 
    className="p-3 rounded-full text-center text-white  hover-black"
    style={{ backgroundColor: link.color || "#F8B400" }} 
    
    key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
      {IconComponent ? <IconComponent size={20} /> : null} 
    </a>
  );
})}
</div>
   
  );
}