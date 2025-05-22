import React, { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    }

  return (
      <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:scale-105 transitiona-ll duration-300 shadow-md dark:shadow-lg"
          title="Toggle Theme"
      >
          {theme === "dark" ? <Sun className = "w-5 h-5 text-yellow-400 transition-transform duration-300" /> : <Moon className = "w-5 h-5 text-gray-700 transition-transform duration-300" />}
      </button>
  )
}

export default ThemeToggle
