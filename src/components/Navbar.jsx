// import { Link } from "react-router-dom";
// import ThemeToggle from "./ThemeToggle";

// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
//       <div className="flex gap-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/skills">Skills</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/experience">Experience</Link>
//         <Link to="/education">Education</Link>
//         <Link to="/certifications">Certifications</Link>
//         <Link to="/contact">Contact</Link>
//         {/* Add others here */}
//           </div>
//           <ThemeToggle />
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "My Timeline", path: "/timeline" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <nav className="w-[95%] h-[70px] mx-auto sticky top-4">
      <div className="relative w-full h-full bg-black dark:bg-white backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-2xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-night dark:text-sand-shadow"
          >
            <img src="../../public/icon-white-circle.png" alt="logo" className="w-10 h-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-md font-medium hover:text-blue-600 dark:hover:text-blue-400 transition ${
                  isActive(link.path)
                    ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[120px] left-[2.5%] w-[95%] bg-gradient-to-br from-white/40 to-white/20 dark:from-gray-900/40 dark:to-gray-800/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-md font-medium py-2 px-4 rounded-md ${
                isActive(link.path)
                  ? "bg-blue-100/50 text-blue-600 dark:bg-blue-800/50 dark:text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="p-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
