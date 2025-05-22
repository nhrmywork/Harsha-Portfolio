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
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-night dark:text-sand-shadow "
        >
          NHR
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-md font-medium py-2 rounded-md ${
                isActive(link.path)
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
