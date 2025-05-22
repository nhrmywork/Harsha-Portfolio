// src/pages/About.jsx
import { motion } from "framer-motion";
import { FaTools, FaCode, FaSmile, FaUserAlt } from "react-icons/fa";
import { DiJava, DiMozilla } from "react-icons/di"; // Devicons

import {
  SiPython,
  SiJavascript,
  //   SiJava,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiFlask,
  SiDjango,
  SiMysql,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  //   SiMatplotlib,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiGit,
  SiGithub,
  SiJupyter,
  SiFigma,
  SiHeroku,
  SiNetlify,
  SiLatex,
} from "react-icons/si";

import {
  FaComments,
  FaUsers,
  FaSyncAlt,
  FaRandom,
  FaPuzzlePiece,
  FaHandshake,
} from "react-icons/fa";
import SoftSkillCard from "../components/SoftSkillCard";
import SkillCard from "../components/SkillCard";
import { usePortfolio } from "../components/PortfolioContext";

const Skills = () => {
  const { portfolioData, loading, error } = usePortfolio();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          My Skills
        </h1>

        {/* Intro */}
        {/* <p className="mb-8 text-lg leading-relaxed">
          Hey there! I'm{" "}
          <span className="font-semibold text-blue-500">
            Harshavardhan Reddy Nagarthi
          </span>
          , a passionate software developer and machine learning enthusiast
          based in India. I enjoy crafting full-stack applications, training
          intelligent models, and continuously learning new technologies to
          build impactful solutions.
        </p> */}

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaCode className="text-blue-500" /> Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              {/* {portfolioData.skills?.technical?.map((item) => (
            <SkillCard 
                  key={item.skill_name}
                  Icon={getSkillIcon(item.skill_name)}
                  name={item.skill_name} 
                />
              ))} */}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaTools className="text-green-500" /> Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              
            </div>
          </motion.div>

          {/* Soft Skills */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2 mt-10 mb-4">
              <FaSmile className="text-yellow-400" /> Soft Skills
            </h2>
            <p>
              I'm known for being an excellent communicator and a reliable team
              player. I'm adaptable, flexible, and enjoy tackling real-world
              problems with logical thinking and creativity. My curiosity and
              willingness to learn have helped me stay ahead in this
              ever-evolving tech world.
            </p>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaUserAlt className="text-pink-500" /> Soft Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {/* {portfolioData.skills?.soft?.map((item) => (
                <SoftSkillCard 
                  key={item.skill_name}
                  Icon={getSoftSkillIcon(item.skill_name)}
                  label={item.skill_name} 
                />
              ))} */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Helper functions for icons
const getSkillIcon = (skillName) => {
  const iconMap = {
    'Python': SiPython,
    'Java': DiJava,
    'JavaScript': SiJavascript,
    'HTML5': SiHtml5,
    'CSS3': SiCss3,
    'React': SiReact,
    'Tailwind CSS': SiTailwindcss,
    'Flask': SiFlask,
    'Django': SiDjango,
    'Scikit-learn': SiScikitlearn,
    'Pandas': SiPandas,
    'NumPy': SiNumpy,
    'Matplotlib': DiMozilla,
    'MySQL': SiMysql,
  };
  return iconMap[skillName] || FaCode;
};

const getToolIcon = (toolName) => {
  const iconMap = {
    'VS Code': BiLogoVisualStudio,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Jupyter': SiJupyter,
    'Figma': SiFigma,
    'Heroku': SiHeroku,
    'Netlify': SiNetlify,
    'LaTeX': SiLatex,
  };
  return iconMap[toolName] || FaTools;
};

const getSoftSkillIcon = (skillName) => {
  const iconMap = {
    'Communication': FaComments,
    'Teamwork': FaUsers,
    'Adaptability': FaSyncAlt,
    'Flexibility': FaRandom,
    'Problem Solving': FaPuzzlePiece,
    'Collaboration': FaHandshake,
  };
  return iconMap[skillName] || FaUserAlt;
};

export default Skills;
