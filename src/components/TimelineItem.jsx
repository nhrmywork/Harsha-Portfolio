import { motion } from "framer-motion";
import Dot from "./Dot";

const TimelineItem = ({ type, title, organization, duration, description }) => {
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
      <div className="absolute left-0 top-3">
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