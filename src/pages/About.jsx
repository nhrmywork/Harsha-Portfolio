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

const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          About Me
        </h1>

        {/* Intro */}
        <p className="mb-8 text-lg leading-relaxed">
          Hey there! I'm{" "}
          <span className="font-semibold text-blue-500">
            Harshavardhan Reddy Nagarthi
          </span>
          , a passionate software developer and machine learning enthusiast
          based in India. I enjoy crafting full-stack applications, training
          intelligent models, and continuously learning new technologies to
          build impactful solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
