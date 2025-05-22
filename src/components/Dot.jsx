const Dot = ({ isEducation }) => (
    <div className="relative flex items-center justify-center">
      <svg
        className="w-8 h-8 rounded-full shadow-lg"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={isEducation ? "#6366F1" : "#10B981"} // Indigo or green
          strokeWidth="3"
          fill={isEducation ? "rgba(99, 102, 241, 0.1)" : "rgba(16, 185, 129, 0.1)"}
        />
        <circle
          cx="12"
          cy="12"
          r="5"
          fill={isEducation ? "#6366F1" : "#10B981"}
        >
          <animate
            attributeName="r"
            values="5;8;5"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
  