
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import react from "react"
import { useEffect, useState } from "react";

const AnimatedProgressBar = ({ value }) => {
    const [progress, setProgress] = useState(0);

  
    useEffect(() => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start >= value) clearInterval(interval);
      }, 20); // Controls animation speed
  
      return () => clearInterval(interval);
    }, [value]);

  
    return (
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textColor: "#000",
          pathColor: "#F8B400",
          trailColor: "#ddd",
          textSize: "20px",
          
        })}/>

  
    );

 
  };

  export default  AnimatedProgressBar;
