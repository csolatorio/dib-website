// import React, { useState } from 'react';
import HeroPage from "../components/hero-page";
import FinancialJourneyBanner from "../components/financial-journey-banner";
// import Services from "../components/services";
// import AboutMeCard from "../components/about-me";
import ContactUs from "../components/contact-us";
// import Awards from "../components/awards-recognition";
import Footer from "../components/footer";
import TestimonialsCarousel from "../components/testimonials";
import NewsletterSignup from "../components/newsletter";

import dibPortrait from "../assets/dib.png";

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

const HomePage = () => {
  return (
    <div className="min-h-[50vh] bg-[#EAE6DC]">
      <HeroPage />
      <FinancialJourneyBanner />
      <section className="py-12 px-6 max-w-7xl mx-auto">
        {/* <h2 className="text-2xl text-[#002C3D]  font-medium mb-2">Services</h2> */}
        <h3 className="text-4xl font-normal mb-10 text-[#002C3D] text-center">
          Services
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

      {/* <AboutMeCard /> */}
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
              offering trusted, transparent, and personalized service. My
              mission is to turn complex financial decisions into empowering
              opportunities that bring peace of mind and lasting results.
            </p>
            <div className="flex justify-start mt-10">
              <a
                href="/about-me"
                className="bg-[#F2C98B] text-black font-semibold px-10 py-4 rounded-lg hover:bg-[#ddb978] transition"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <Awards /> */}
      <TestimonialsCarousel />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default HomePage;
