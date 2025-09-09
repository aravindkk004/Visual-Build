import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="flex flex-col items-start p-6  rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer text-left">
      {/* Icon */}
      <div className="text-4xl mb-4 bg-[#191937] p-2 rounded-md">{feature.icon}</div>
      
      {/* Title */}
      <h3 className="text-white text-2xl font-bold mb-2">{feature.title}</h3>
      
      {/* Description */}
      <p className="text-white text-md">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
