// src/pages/Timeline.jsx
import TimelineItem from "../components/TimelineItem";

const Timeline = () => {
  const timelineData = [
    {
      type: "education",
      title: "B.Tech in Computer Science Engineering",
      organization: "Malla Reddy University",
      duration: "2021 - 2025",
      description:
        "Graduated with a CGPA of 8.76, completed projects in machine learning and web development.",
    },
    {
      type: "experience",
      title: "Machine Learning Intern",
      organization: "CodSoft",
      duration: "June 2023 - August 2023",
      description:
        "Developed models for spam detection, movie genre classification, and customer churn prediction.",
    },
    {
      type:"experience",
          title:"Salesforce Intern",
          organization:"Your Company Name",
          duration:"September 2024 - Present",
          description:"Working on Field Service WorkOrder Optimization project using Salesforce technologies.",
        
    }
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
        Education & Experience
      </h1>

      {/* Vertical Line */}
      <div className="relative pl-10">
      <div className="absolute left-3 top-0 h-full w-1 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
      {/* Timeline items */}

        {timelineData.map((item, idx) => (
          <div key={idx} className={`relative ${idx !== timelineData.length - 1 ? "border-l-2 border-dashed border-indigo-300 dark:order-indigi-600" : ""} pl-14 mb-12`}
          >
            <TimelineItem {...item} />
          </div>
        ))}

        {/* <TimelineItem
          type="education"
          title="B.Tech in Computer Science Engineering"
          organization="Malla Reddy University"
          duration="2019 - 2023"
          description="Graduated with a CGPA of 8.76, completed projects in machine learning and web development."
        />

        <TimelineItem
          type="experience"
          title="Machine Learning Intern"
          organization="CodSoft"
          duration="June 2023 - August 2023"
          description="Developed models for spam detection, movie genre classification, and customer churn prediction."
        />

        <TimelineItem
          type="experience"
          title="Salesforce Intern"
          organization="Your Company Name"
          duration="September 2024 - Present"
          description="Working on Field Service WorkOrder Optimization project using Salesforce technologies."
        /> */}

        {/* Add more timeline items here */}
      </div>
    </div>
  );
};

export default Timeline;
