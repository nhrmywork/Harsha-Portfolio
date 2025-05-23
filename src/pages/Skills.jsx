// src/pages/Skills.jsx
import { motion } from "framer-motion";
import { FaTools, FaCode, FaSmile, FaUserAlt } from "react-icons/fa";
import { DiJava, DiMozilla } from "react-icons/di";
import {
  SiPython,
  SiJavascript,
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
  SiGit,
  SiGithub,
  SiJupyter,
  SiFigma,
  SiHeroku,
  SiNetlify,
  SiLatex,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
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
import { usePortfolio } from "../context/PortfolioContext";

const Skills = () => {
  const { portfolioData, loading, error } = usePortfolio();

  if (loading) return <div>Loading...</div>;
  if (error) return console.log(error);

  return (
    <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          My Skills
        </h1>

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
              {Object.entries(portfolioData.skills?.technical || {}).map(([key, description]) => (
                <SkillCard
                  key={key}
                  name={key}
                  description={description}
                  Icon={getSkillIcon(key)}
                />
              ))}
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
              {Object.entries(portfolioData.skills?.tools || {}).map(([key, description]) => (
                <SkillCard
                  key={key}
                  name={key}
                  description={description}
                  Icon={getToolIcon(key)}
                />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
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
              {Object.entries(portfolioData.skills?.soft || {}).map(([key, description]) => (
                <SoftSkillCard
                  key={key}
                  label={key}
                  description={description}
                  Icon={getSoftSkillIcon(key)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Helper function to map skill names to icons
const getSkillIcon = (skillName) => {
  const iconMap = {
    Python: SiPython,
    Java: DiJava,
    JavaScript: SiJavascript,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    React: SiReact,
    "Tailwind CSS": SiTailwindcss,
    Flask: SiFlask,
    Django: SiDjango,
    "Scikit-learn": SiScikitlearn,
    Pandas: SiPandas,
    NumPy: SiNumpy,
    Matplotlib: DiMozilla,
    MySQL: SiMysql,
  };
  return iconMap[skillName] || FaCode; // Default to FaCode if no icon is found
};

// Helper function to map tool names to icons
const getToolIcon = (toolName) => {
  const iconMap = {
    "VS Code": BiLogoVisualStudio,
    Git: SiGit,
    GitHub: SiGithub,
    Jupyter: SiJupyter,
    Figma: SiFigma,
    Heroku: SiHeroku,
    Netlify: SiNetlify,
    LaTeX: SiLatex,
  };
  return iconMap[toolName] || FaTools; // Default to FaTools if no icon is found
};

// Helper function to map soft skill names to icons
const getSoftSkillIcon = (skillName) => {
  const iconMap = {
    Communication: FaComments,
    Teamwork: FaUsers,
    Adaptability: FaSyncAlt,
    Flexibility: FaRandom,
    "Problem Solving": FaPuzzlePiece,
    Collaboration: FaHandshake,
  };
  return iconMap[skillName] || FaUserAlt; // Default to FaUserAlt if no icon is found
};

export default Skills;
