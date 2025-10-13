import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './Components/Project'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Home from './Components/Home'
  import About from './Components/About'
 import Skills from './Components/Skills'
 import Experainces from './Components/Experainces'
 import HireMe from './Components/HireMe';
import Contacts from './Components/Contacts'
import Footer  from './Components/Footer';

import Chatbox from './Chatbox';


function App() {


    useEffect(() => {
        // Step 1: Retrieve scroll position from sessionStorage (if available)
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    
        // Step 2: If a saved scroll position exists, scroll to it
        if (savedScrollPosition) {
          window.scrollTo(0, parseInt(savedScrollPosition, 10)); // Convert to number
        }
    
        // Step 3: Save scroll position before page unload (or refresh)
        const handleBeforeUnload = () => {
          sessionStorage.setItem('scrollPosition', window.scrollY); // Save the current scroll position
        };
    
        // Step 4: Add event listener for before unload
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []); 
      
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulating a delay (e.g., loading data or assets)
        setTimeout(() => {
          setIsLoading(false);
        }, 3000); // Change the timeout duration as per your needs
      }, []);

    return (
        <div>
               <div className="relative min-h-screen  ">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-[#F8B400] bg-opacity-50 z-50">
          <div className="border-t-4 border-white border-solid w-16 h-16 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main Content */}
      <div className={isLoading ? 'hidden' : 'block' }>
      <Navbar/>
  
        <Home/>
        <About/>
        <Skills/>
       <Experainces/>
        <HireMe/>
        <Project/>
     <Contacts/>
       <Footer />   
       <Chatbox />     
      </div>
    </div>
   
       </div>

      );
 
}

export default App
