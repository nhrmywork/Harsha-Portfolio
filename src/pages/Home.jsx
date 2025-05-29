import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../components/PortfolioContext';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import ParticlesBg from '../components/ParticlesBg';

const Home = () => {
  const { portfolioData, loading, error } = usePortfolio();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <ParticlesBg />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-3"
              >
                <span className="text-blue-600 dark:text-blue-400 text-lg font-medium">
                  Hello, I'm
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                  Harshavardhan
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Reddy Nagarthi
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              >
                A passionate Software Developer & ML Enthusiast crafting elegant solutions 
                for tomorrow's challenges. Specializing in full-stack development and 
                machine learning applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Let's Connect
                </a>
                <a
                  href="/resume.pdf"
                  className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  View Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-6 pt-4"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon className="w-7 h-7" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-72 h-72 mx-auto lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rotate-6 blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -rotate-6 blur-xl opacity-30 animate-pulse delay-75"></div>
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Profile"
                  className="relative rounded-2xl object-cover w-full h-full shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <FaArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-bounce" />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;