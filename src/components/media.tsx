import React from "react";

import award1 from "../assets/award1.png";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";
import award5 from "../assets/award5.png";
import award6 from "../assets/award6.jpg";
import award7 from "../assets/award7.png";

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
    title: "Premier Award Qualifier",
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
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award6,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award7,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
];

const MediaGallery: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="media-gallery">
      <h2 className="text-lg font-medium text-[#001A29]">
        Awards & Recognition
      </h2>
      <h3 className="text-3xl font-medium mt-2 mb-8 text-[#001A29]">
        A Journey Marked by{" "}
        <span className="text-[#001A29] font-bold">Excellence and Trust</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-[#F4C381] rounded-xl p-4 shadow-md flex flex-col"
          >
            <div className="mb-4 flex justify-center">
              <img
                src={award.image}
                alt={award.title}
                className="h-[200px] object-cover rounded-md"
              />
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

export default MediaGallery;
