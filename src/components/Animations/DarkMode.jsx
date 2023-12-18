import { useState, useEffect } from "react";
import Dark from "../../assets/website/dark-mode-button.png";
import Light from "../../assets/website/light-mode-button.png";
const getModeLocal = localStorage.getItem("theme") || "light";

function DarkMode() {
  const [theme, setTheme] = useState(getModeLocal);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <div className="relative ">
        <img
          src={Light}
          alt="Light Mode switch Button"
          className={`w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <img
          src={Dark}
          alt="Dark Mode switch Button"
          className="w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </>
  );
}

export default DarkMode;
