

//    import { useEffect, useState } from "react";

//    export default function ThemeToggle() {
//      const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
   
//      useEffect(() => {

//         console.log("Theme is:", theme); 
//        if (theme === "dark") {
           
//          document.documentElement.classList.add("dark");
//        } else {
//          document.documentElement.classList.remove("dark");
//        }
//        localStorage.setItem("theme", theme);
//      }, [theme]);
   
//      return (
//        <button
//          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//          className=""
//        >
//          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
//        </button>
//      );
//    }