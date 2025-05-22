// src/components/TimelineItem.jsx
import { motion } from "framer-motion";

const TimelineItem = ({ type, title, organization, duration, description }) => {
  // type: "education" or "experience"
  const Dot = ({ isEducation }) => type === "education";
  const isEducation = type === "education";

  return (
    <motion.div
      className="relative pl-12 mb-10"
      initial={{ opacity: 0, x: isEducation ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Dot */}
      {/* <span
        className={`absolute left-0 top-2 w-6 h-6 rounded-full border-4 ${
          isEducation
            ? "border-indigo-600 bg-indigo-100 dark:bg-indigo-600 dark:border-indigo-300"
            : "border-green-600 bg-green-100 dark:bg-green-600 dark:border-green-300"
        } flex items-center justify-center text-white text-lg`}
      >
        {isEducation ? "🎓" : "💼"}
      </span> */}

      <div className="" absolute left-0 top-3>
        <Dot isEducation={isEducation} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
        {organization}
      </p>
      <p className="text-gray-500 dark:text-gray-400 italic mb-2">{duration}</p>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;
