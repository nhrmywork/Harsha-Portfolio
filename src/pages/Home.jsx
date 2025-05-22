import React from 'react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../components/PortfolioContext'

const Home = () => {
    const { portfolioData, loading, error } = usePortfolio();
  return (
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10">
          {/* Text Section */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left space-y-6"
          >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi guys, I'm <span className="text-night dark:text-sand-shadow">Harshavardhan Reddy Nagarthi</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  Software Developer & Machine Learning Enthusiast
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md">
              Download Resume
              </button>
          </motion.div>

          {/* Image or Placeholder */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
          className = "w-60 h-60 bg-gray-300 dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-2xl text-gray-600 dark:text-gray-200"
          >
              {/* You can replace with actual image later */}
              {/* <img src="/path/to/profile.jpg" alt="Harsha" className="w-full h-full object-cover rounded-full" /> */}
              {/* Add animated background particles or floating shapes later. */}
              Your Image
          </motion.div>  
          

          
    </section>
  )
}

export default Home;
