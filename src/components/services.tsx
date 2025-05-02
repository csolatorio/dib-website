import React from "react";
import {
  FaClipboardList,
  FaShieldAlt,
  FaGraduationCap,
  FaChartLine,
  FaPersonBooth,
  FaLandmark,
} from "react-icons/fa";

const services = [
  {
    icon: <FaClipboardList className="text-[#F2C98B] text-3xl" />,
    title: "Comprehensive Financial Planning",
    description: "Custom plans built around your goals and life milestones.",
  },
  {
    icon: <FaShieldAlt className="text-[#F2C98B] text-3xl" />,
    title: "Risk Management & Insurance",
    description: "Protect what matters with smart, strategic coverage.",
  },
  {
    icon: <FaGraduationCap className="text-[#F2C98B] text-3xl" />,
    title: "Education & Family Planning",
    description: "Prepare for your children’s future and family priorities.",
  },
  {
    icon: <FaChartLine className="text-[#F2C98B] text-3xl" />,
    title: "Investment Strategies",
    description: "Grow your wealth with personalized investment solutions.",
  },
  {
    icon: <FaPersonBooth className="text-[#F2C98B] text-3xl" />,
    title: "Retirement Planning",
    description: "Build a future you can enjoy with confidence.",
  },
  {
    icon: <FaLandmark className="text-[#F2C98B] text-3xl" />,
    title: "Business & Estate Planning",
    description: "Secure your legacy with clear succession strategies.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto" id="services">
      <h2 className="text-2xl text-[#002C3D] font-medium mb-2">Services</h2>
      <h3 className="text-4xl font-normal mb-10 text-[#002C3D]">
        Services <span className="text-[#002C3D] font-bold">I Provide</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#002C3D] text-white p-6 rounded-xl space-y-3 h-full"
          >
            <div>{service.icon}</div>
            <h4 className="text-lg font-semibold text-[#F2C98B]">
              {service.title}
            </h4>
            <p className="text-md text-gray-200">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
