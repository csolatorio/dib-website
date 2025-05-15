import React from "react";
import award1 from "../assets/award1.png";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";
import award5 from "../assets/award5.png";
import award6 from "../assets/award6.jpg";
import award7 from "../assets/award7.png";
import award8 from "../assets/award8.png";
import award9 from "../assets/award9.png";

import Navbar from "./navbar";

const awards = [
  {
    image: award1,
    title: "Top 4 Private Wealth Consultant – 2022",
    description:
      "Recognized among Singapore’s top financial professionals for performance and client impact.",
  },
  {
    image: award2,
    title: "Platinum Life Club Award",
    description:
      "Honoring excellence in delivering long-term financial value and service to clients.",
  },
  {
    image: award3,
    title: "Premier Award Gold",
    description:
      "Earned for consistent performance, client satisfaction, and service excellence.",
  },
  {
    image: award4,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award5,
    title: "New Silver Award",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award6,
    title: "MDRT Qualifier",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award7,
    title: "Star Club Award",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award8,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award9,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
];

const AwardsRecognition: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#002b3d] text-white">
      <Navbar />
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-white">
            Awards & Recognition
          </h2>
          <h3 className="text-3xl font-medium mt-2 text-white">
            A Journey Marked by{" "}
            <span className="text-[#F4C381] font-bold">
              Excellence and Trust
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-[#F4C381] rounded-xl p-6 shadow-md flex flex-col h-full transition hover:shadow-xl"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={award.image}
                  alt={award.title}
                  className="h-[250px] w-auto object-cover rounded-md"
                />
              </div>
              <h4 className="font-bold text-lg text-[#001A29] mb-2 text-center">
                {award.title}
              </h4>
              {/* <p className="text-sm text-[#001A29] leading-relaxed">
                {award.description}
              </p> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsRecognition;
