import React, { useState } from "react";
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

import { Link } from "react-router-dom";

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
    features: [
      "Personalized budgeting plans",
      "Investment portfolio alignment",
      "Estate planning advice",
      "Ongoing financial monitoring",
    ],
    ctaText: "Start Planning",
  },
  {
    icon: <FaShieldAlt className="text-[#F2C98B] text-4xl" />,
    title: "Risk Management & Insurance",
    description:
      "Protect your income, health, and assets with carefully selected insurance solutions and proactive risk mitigation strategies tailored to your personal situation.",
    features: [
      "Income protection solutions",
      "Health and life insurance plans",
      "Asset protection strategies",
      "Risk mitigation consultations",
    ],
    ctaText: "Protect Yourself",
  },
  {
    icon: <FaGraduationCap className="text-[#F2C98B] text-4xl" />,
    title: "Education & Family Planning",
    description:
      "Plan for your children’s education, growing family needs, and long-term support systems with structured and practical financial roadmaps.",
    features: [
      "Education fund setup",
      "Family financial roadmaps",
      "Support system structuring",
      "Long-term care planning",
    ],
    ctaText: "Plan for Family",
  },
  {
    icon: <FaChartLine className="text-[#F2C98B] text-4xl" />,
    title: "Investment Strategies",
    description:
      "Grow your wealth using disciplined, data-driven investment strategies that reflect your risk tolerance and long-term financial goals.",
    features: [
      "Risk tolerance assessment",
      "Diversified portfolio building",
      "Market trend analysis",
      "Periodic portfolio reviews",
    ],
    ctaText: "Invest Wisely",
  },
  {
    icon: <FaPersonBooth className="text-[#F2C98B] text-4xl" />,
    title: "Retirement Planning",
    description:
      "Design a retirement lifestyle plan with sustainable income streams, tax efficiency, and peace of mind for your golden years.",
    features: [
      "Retirement income modeling",
      "Tax-efficient withdrawal plans",
      "Sustainable income strategies",
      "Peace of mind consulting",
    ],
    ctaText: "Plan Retirement",
  },
  {
    icon: <FaLandmark className="text-[#F2C98B] text-4xl" />,
    title: "Business & Estate Planning",
    description:
      "Ensure business continuity and seamless wealth transfer with tailored succession strategies and estate structuring support.",
    features: [
      "Business succession plans",
      "Estate structuring support",
      "Wealth transfer strategies",
      "Continuity planning",
    ],
    ctaText: "Secure Legacy",
  },
];

const HomePage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  return (
    <div className="min-h-[50vh] bg-[#EAE6DC]">
      <HeroPage />
      <FinancialJourneyBanner />
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        <h3 className="text-3xl sm:text-4xl font-semibold text-center text-[#F2C98B] mb-10">
          Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#001A29] rounded-2xl shadow-md p-6 space-y-4 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              <div>{service.icon}</div>
              <h4 className="text-xl sm:text-2xl font-semibold text-[#F2C98B]">
                {service.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed line-clamp-3">
                {service.description}
              </p>
              <button
                onClick={() => setSelectedService(idx)}
                className="text-sm text-[#F2C98B] underline hover:text-yellow-400 transition"
              >
                Learn more
              </button>
            </div>
          ))}
        </div>

        {/* Modal Inside Section with Blur Background */}
        {selectedService !== null && (
          <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center px-4 sm:px-0 z-30">
            <div className="bg-[#001A29] max-w-lg w-full p-6 rounded-2xl shadow-lg text-white relative space-y-4">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-2 right-3 text-gray-300 hover:text-white text-2xl"
              >
                &times;
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="mb-3">{services[selectedService].icon}</div>
                <h4 className="text-2xl font-semibold text-[#F2C98B] mb-2">
                  {services[selectedService].title}
                </h4>
                <p className="text-gray-200 mb-4">
                  {services[selectedService].description}
                </p>
              </div>

              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {services[selectedService].features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="text-center mt-4">
                <button className="bg-[#F2C98B] text-[#001A29] font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-300 transition">
                  {services[selectedService].ctaText}
                </button>
              </div>
            </div>
          </div>
        )}
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
              <Link
                to="/about-me"
                className="bg-[#F2C98B] text-black font-semibold px-10 py-4 rounded-lg hover:bg-[#ddb978] transition"
              >
                Know more
              </Link>
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
