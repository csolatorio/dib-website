import React from "react";
import { Briefcase, Star, Award, Users } from "lucide-react";

const awards = [
  {
    icon: <Briefcase size={32} className="text-white" />,
    title: "Top 4 Private Wealth Consultant – 2022",
    description:
      "Recognized among Singapore’s top financial professionals for performance and client impact.",
  },
  {
    icon: <Star size={32} className="text-white" />,
    title: "Platinum Life Club Award",
    description:
      "Honoring excellence in delivering long-term financial value and service to clients.",
  },
  {
    icon: <Award size={32} className="text-white" />,
    title: "Premier Award Qualifier",
    description:
      "Earned for consistent performance, client satisfaction, and service excellence.",
  },
  {
    icon: <Users size={32} className="text-white" />,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
];

const AwardsRecognition: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-lg font-medium text-[#001A29]">
        Awards & Recognition
      </h2>
      <h3 className="text-3xl font-medium mt-2 mb-8 text-[#001A29]">
        A Journey Marked by{" "}
        <span className="text-[#001A29] font-bold">Excellence and Trust</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="bg-[#F4C381] rounded-xl p-6 shadow-md">
            <div className="mb-4 bg-gray-300 w-10 h-10 flex items-center justify-center rounded-sm">
              {award.icon}
            </div>
            <h4 className="font-bold text-sm mb-2 text-[#001A29]">
              {award.title}
            </h4>
            <p className="text-sm text-[#001A29]">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsRecognition;
