import React from "react";

import Navbar from "./navbar";
import Footer from "../components/footer";

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
    icon: <FaClipboardList className="text-[#F2C98B] text-4xl" />,
    title: "Comprehensive Financial Planning",
    description:
      "We create personalized, all-encompassing financial plans that adapt to your goals, lifestyle, and life stages—from budgeting to investment, estate planning, and more.",
  },
  {
    icon: <FaShieldAlt className="text-[#F2C98B] text-4xl" />,
    title: "Risk Management & Insurance",
    description:
      "Protect your income, health, and assets with carefully selected insurance solutions and proactive risk mitigation strategies tailored to your personal situation.",
  },
  {
    icon: <FaGraduationCap className="text-[#F2C98B] text-4xl" />,
    title: "Education & Family Planning",
    description:
      "Plan for your children’s education, growing family needs, and long-term support systems with structured and practical financial roadmaps.",
  },
  {
    icon: <FaChartLine className="text-[#F2C98B] text-4xl" />,
    title: "Investment Strategies",
    description:
      "Grow your wealth using disciplined, data-driven investment strategies that reflect your risk tolerance and long-term financial goals.",
  },
  {
    icon: <FaPersonBooth className="text-[#F2C98B] text-4xl" />,
    title: "Retirement Planning",
    description:
      "Design a retirement lifestyle plan with sustainable income streams, tax efficiency, and peace of mind for your golden years.",
  },
  {
    icon: <FaLandmark className="text-[#F2C98B] text-4xl" />,
    title: "Business & Estate Planning",
    description:
      "Ensure business continuity and seamless wealth transfer with tailored succession strategies and estate structuring support.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#002b3d] text-white">
      <Navbar />
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-semibold text-center text-[#F2C98B] mb-10">
          Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#001A29] rounded-2xl shadow-md p-6 space-y-4 transition-all duration-300 hover:shadow-xl"
            >
              <div>{service.icon}</div>
              <h4 className="text-xl sm:text-2xl font-semibold text-[#F2C98B]">
                {service.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
