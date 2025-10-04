


import { useState, useEffect } from "react";

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(interval);
    }, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold">{count}%</p>
    
    </div>
  );
};

export default AnimatedNumber;