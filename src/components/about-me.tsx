import React from "react";
import dibPortrait from "../assets/dib.png";

const AboutMeCard: React.FC = () => {
  return (
    <section className="bg-[#002b3d] text-white py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Image in circular background */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 bg-[#f9c97b] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={dibPortrait} // Replace with actual image path
              alt="Dibyendu Haldar"
              className="w-60 h-70 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Right: Text content */}
        <div className="text-center md:text-left max-w-2xl">
          <p className="text-lg text-[#c3d5df] mb-2">About Me</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Who is <span className="text-[#f9c97b]">DIBYENDU HALDAR?</span>
          </h2>
          <p className="text-[#c3d5df] text-base leading-relaxed text-justify">
            With a background in finance and a passion for helping others, I
            specialize in financial planning, asset and risk management,
            offering trusted, transparent, and personalized service. My mission
            is to turn complex financial decisions into empowering opportunities
            that bring peace of mind and lasting results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeCard;
