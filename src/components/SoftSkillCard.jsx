// src/components/SoftSkillCard.jsx
const SoftSkillCard = ({ Icon, label }) => {
    return (
      <div className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-all">
        <Icon className="text-3xl text-indigo-600 dark:text-indigo-400 mb-2" />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{label}</span>
      </div>
    );
  };
  
  export default SoftSkillCard;
  