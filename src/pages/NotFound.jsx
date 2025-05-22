// // src/pages/NotFound.jsx
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const NotFound = () => {
//   return (
//     <section className="flex flex-col justify-center items-center min-h-screen text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6">
//       {/* 👻 Floating Ghost Emoji */}
//       <motion.div
//         className="text-8xl mb-4"
//         animate={{ y: [0, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//       >
//         👻
//       </motion.div>

//       <motion.h1
//         className="text-8xl font-extrabold text-blue-600 dark:text-blue-400"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         404
//       </motion.h1>

//       <motion.h2
//         className="text-2xl font-semibold mt-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         Page Not Found
//       </motion.h2>

//       <motion.p
//         className="mt-4 text-gray-600 dark:text-gray-400 max-w-md"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//       >
//         Oops! The page you're looking for doesn't exist or has been moved.
//       </motion.p>

//       <motion.div
//         className="mt-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//       >
//         <Link
//           to="/"
//           className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
//         >
//           Go Back Home
//         </Link>
//       </motion.div>
//     </section>
//   );
// };

// export default NotFound;




// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticlesBg from "../components/ParticlesBg";

const NotFound = () => {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen text-center text-gray-100 px-6 overflow-hidden">
      {/* <ParticlesBg /> */}

      {/* Glitching 404 */}
      <motion.h1
        className="text-8xl font-extrabold text-cyan-400 animate-glitch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl mt-4 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        You seem to be lost in cyberspace 👾
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition"
        >
          Return to Reality
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
