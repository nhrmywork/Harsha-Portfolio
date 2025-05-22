// src/components/SkillCard.jsx
const SkillCard = ({ Icon, name }) => {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition-transform">
        <Icon className="text-4xl text-blue-600 dark:text-blue-400 mb-2" />
        <span className="font-medium text-sm">{name}</span>
      </div>
    );
  };
  
  export default SkillCard;
  