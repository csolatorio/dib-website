import { useState } from "react";
import HeroPage from "../components/hero-page";
import FinancialJourneyBanner from "../components/financial-journey-banner";
// import Services from "../components/services";
// import AboutMeCard from "../components/about-me";
// import ContactUs from "../components/contact-us";
// import Awards from "../components/awards-recognition";
import Footer from "../components/footer";
// import TestimonialsCarousel from "../components/testimonials";
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
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const services = [
  {
    icon: <FaClipboardList className="text-[#F2C98B] text-4xl" />,
    title: "Comprehensive Financial Planning",
    description:
      "WE CREATE personalized, all-encompassing financial plans that adapt to your goals, lifestyle, and life stages—from budgeting to investment, estate planning, and more.",
    features: [
      <div key="1">
        <strong>Personalized Budgeting Plans</strong>
        <br />
        Offer tailored monthly and annual budgets that align with your income,
        goals, and lifestyle to promote disciplined, confident spending and
        saving habits.
      </div>,
      <div key="2">
        <strong>Investment Portfolio Alignment</strong>
        <br />
        Strategically structure your investments to match your financial goals, Investment comfort level, and time horizon for optimized growth and stability.
      <div key="3">
        <strong>Ongoing Financial Monitoring</strong>
        <br />
        Regularly track and adjust your financial plan with professional
        insights to keep you on course through life changes and market shifts.
      </div>,
    ],

    ctaText: "Start Planning",
  },
  {
    icon: <FaShieldAlt className="text-[#F2C98B] text-4xl" />,
    title: "Income Protection Planning",
    description:
      "PROTECT your income, health, and assets with carefully selected insurance solutions and proactive Income protection planning strategy tailored to your personal situation.",
    features: [
      <div key="1">
        <strong>Income Protection Solutions</strong>
        <br />
        Safeguard your earnings during illness or disability with income
        replacement plans.
      </div>,
      <div key="2">
        <strong>Health and Life Insurance Plans</strong>
        <br />
        Customized coverage to support your medical needs and secure your
        family’s future.
      </div>,
      <div key="3">
        <strong>Asset Protection Strategies</strong>
        <br />
        Legal and financial tools designed to defend your wealth from lawsuits
        and creditors.
      </div>,
      <div key="4">
        <strong>Income Protection Consultations</strong>
        <br />
        Tailored guidance to identify financial gaps and improve overall stability..
      </div>,
    ],

    ctaText: "Protect Yourself",
  },
  {
    icon: <FaGraduationCap className="text-[#F2C98B] text-4xl" />,
    title: "Education & Family Planning",
    description:
      "PLAN for your children’s education, growing family needs, and long-term support systems with structured and practical financial roadmaps.",
    features: [
      <div key="1">
        <strong>Education Fund Setup</strong>
        <br />
        Plan and allocate resources effectively for your children’s or
        dependents’ education, using tax-efficient savings vehicles and
        long-term strategies.
      </div>,
      <div key="2">
        <strong>Family Financial Roadmaps</strong>
        <br />
        Develop comprehensive plans that guide your family’s financial
        decisions, from daily budgeting to long-term wealth-building and legacy
        goals.
      </div>,
      <div key="3">
        <strong>Support System Structuring</strong>
        <br />
        Organize financial support for dependents, aging parents, or special
        needs family members with clarity, sustainability, and care in mind.
      </div>,
      <div key="4">
        <strong>Long-term Care Planning</strong>
        <br />
        Prepare for potential future healthcare needs with strategies to manage
        costs, protect assets, and ensure quality of life as you age.
      </div>,
    ],

    ctaText: "Plan for Family",
  },
  {
    icon: <FaChartLine className="text-[#F2C98B] text-4xl" />,
    title: "Investment Strategies",
    description:
      "GROW your wealth using disciplined, data-driven investment strategy that reflect your Investment comfort level and long-term financial goals.",
    features: [
      <div key="1">
        <strong>Client Investment Profile Review</strong>
        <br />
        Evaluate your comfort with market fluctuations to tailor an investment strategy that aligns with your financial goals and personal financila profile.
      </div>,
      <div key="2">
        <strong>Diversified Portfolio Building</strong>
        <br />
        Design a well-balanced portfolio across asset classes to strengthen consistency and long-term performance.
      </div>,
      <div key="3">
        <strong>Market Trend Analysis</strong>
        <br />
        Monitor economic indicators and market movements to inform proactive
        investment decisions and uncover new opportunities.
      </div>,
      <div key="4">
        <strong>Periodic Portfolio Reviews</strong>
        <br />
        Conduct regular check-ins to adjust your investment strategy as your
        life circumstances, market conditions, and goals evolve.
      </div>,
    ],

    ctaText: "Invest Wisely",
  },
  {
    icon: <FaPersonBooth className="text-[#F2C98B] text-4xl" />,
    title: "Retirement Planning",
    description:
      "DESIGN a retirement lifestyle plan with sustainable income streams, tax efficiency, and peace of mind for your golden years.",
    features: [
      <div key="1">
        <strong>Retirement Income Modeling</strong>
        <br />
        Forecast your retirement income needs and sources to ensure you can
        maintain your lifestyle throughout your retirement years.
      </div>,
      <div key="2">
        <strong>Tax-efficient Withdrawal Plans</strong>
        <br />
        Structure your withdrawals from various accounts to minimize taxes and
        extend the longevity of your retirement savings.
      </div>,
      <div key="3">
        <strong>Sustainable Income Strategies</strong>
        <br />
        Implement dependable income solutions such as annuities, dividends, and
        systematic withdrawals to support a steady cash flow.
      </div>,
      <div key="4">
        <strong>Peace of Mind Consulting</strong>
        <br />
        Gain confidence in your retirement readiness with expert advice tailored
        to your financial situation, goals, and lifestyle aspirations.
      </div>,
    ],

    ctaText: "Plan Retirement",
  },
  {
    icon: <FaLandmark className="text-[#F2C98B] text-4xl" />,
    title: "Business & Estate Planning",
    description:
      "ENSURE business continuity and seamless wealth transfer with tailored succession strategies and estate structuring support.",
    features: [
      <div key="1">
        <strong>Business Succession Plans</strong>
        <br />
        Prepare for a smooth ownership transition by developing strategies that
        preserve business value and ensure leadership continuity.
      </div>,
      <div key="2">
        <strong>Estate Structuring Support</strong>
        <br />
        Organize and optimize your estate with guidance on wills, trusts, and
        tax considerations to protect and pass on your legacy.
      </div>,
      <div key="3">
        <strong>Wealth Transfer Strategies</strong>
        <br />
        Create a tax-efficient plan to transfer wealth to future generations
        while aligning with your personal, philanthropic, and family goals.
      </div>,
      <div key="4">
        <strong>Continuity Planning</strong>
        <br />
        Safeguard your business and family’s financial future with proactive
        plans for unexpected events, leadership changes, or economic
        disruptions.
      </div>,
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
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-[#001A29] mb-2">
          Services
        </h3>
        <h2 className="text-2xl font-medium text-[#001A29] mb-10 text-center">
          Don't Just Save—Build. Here's What You Need to Know.
        </h2>
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
                className="text-sm text-[#F2C98B] underline hover:text-[#Ffbf00] transition"
              >
                <b>LEARN MORE</b>
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
                <Link to="/contact-us">
                  <button className="bg-[#F2C98B] text-[#001A29] font-semibold px-6 py-2 rounded-lg shadow hover:bg-yellow-300 transition">
                    {services[selectedService].ctaText}
                  </button>
                </Link>
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
            {/* <p className="text-lg text-[#c3d5df] mb-2">About Me</p> */}
            <h2 className="text-4xl font-bold text-white mb-4">
              Who is <span className="text-[#f9c97b]">DIBYENDU HALDAR?</span>
            </h2>
            <p className="text-[#c3d5df] text-base leading-relaxed text-justify">
              With a background in finance and a passion for helping others, I
              specialize in financial planning, asset and financial protection strategies,
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
      {/* <TestimonialsCarousel /> */}

      <section className="flex justify-center items-center min-h-screen bg-[#F2C98B]">
        <div className="bg-[#F2C98B] text-white p-6 flex flex-col lg:flex-row justify-between items-start gap-12 max-w-6xl w-full">
          {/* Left Section */}
          <div className="max-w-md space-y-6">
            <div>
              <h4 className="text-lg text-left text-[#002b3d]">Contact Us</h4>
              <h1 className="text-3xl font-bold mt-2 text-[#002b3d]">
                Let’s Talk About Your Goals
              </h1>
            </div>
            <div className="space-y-4 text-gray-200">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="mt-1 text-[#002b3d] h-8 w-auto" />
                <p className="text-xl text-[#002b3d]">+65 9839 3475</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="mt-1 text-[#002b3d] h-8 w-auto" />
                <p className="text-xl text-[#002b3d]">
                  hello@dibyenduhaldar.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-md bg-transparent">
            <p className="text-xl text-[#002b3d] mb-10">
              Have questions or ready to get started? I’d love to hear from you.
            </p>
            <form
              action="https://formsubmit.co/dib.haldar@gmail.com"
              method="POST"
            >
              {/* Optional: Customize email subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission!"
              />
              {/* Optional: Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Optional: Redirect after submit */}
              <input
                type="hidden"
                name="_next"
                value="https://dibyenduhaldar.com/"
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-1/2 p-2 rounded bg-gray-100 text-black mb-4"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-1/2 p-2 rounded bg-gray-100 text-black mb-4"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 rounded bg-gray-100 text-black mb-4"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full p-2 rounded bg-gray-100 text-black mb-4"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#FFBF00] hover:bg-yellow-500 text-[#002b3d] font-semibold py-3 px-10 rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <ContactUs /> */}
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default HomePage;
