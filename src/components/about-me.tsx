import React from "react";
import dibPortrait from "../assets/dib.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import Navbar from "./navbar";
import Footer from "../components/footer";

const AboutMeCard: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen text-white bg-[#002b3d]">
      <Navbar />
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Image: centered on mobile, floated on md+ */}
            <div className="w-60 h-60 bg-[#f9c97b] rounded-full flex items-center justify-center overflow-hidden mx-auto mb-6 md:float-left md:mx-0 md:mr-6 md:mb-4">
              <img
                src={dibPortrait}
                alt="Dibyendu Haldar"
                className="object-cover rounded-full"
              />
            </div>

            {/* Text content */}
            {/* <p className="text-lg text-[#c3d5df] mb-2 text-center md:text-left">
              About Me
            </p> */}
            <h2 className="text-4xl font-bold text-white mb-4 text-center md:text-left">
              Who is <span className="text-[#f9c97b]">DIBYENDU HALDAR?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-[#f9c97b]">
              Prudential Financial Advisers Singapore | Financial Adviser
            </p>
            <br />
            <br />
            <p className="text-[#c3d5df] text-base leading-relaxed text-justify">
              Over the past decade, I have turned challenges into
              opportunities, and built lasting realtionship 
              with over 300 families in Singapore. My goal is simple -to advise 
              individuals and families gain financial confidence through clear,
              personalize and sustainable financial planning.
              <br />
              <br />
              I am grateful to have been Consistently recognized as a 
              Private Client Advisor since 2021,with several professional milestones 
              along the way-including being a Premier Award Qualifier since 2018,
              a Life Club member since 2019, and receiving the 
              Trusted Financial Practioner Award by IFPAS in 2025.
              As an MDRT Ambassador and Mentor since 2021, I remain 
              passionate about guiding clients and fellow professionals on their journey
              toward growth and success.
              <br />
              <br />
              I specialize in asset management and risk management,and hold a 
              Post Graduate Diploma In Management in Finance and Marketing.
              I'm certified in Financial Need Analysis and Plan Construction,
              IBF qualified L1 in Financial Planning,and an Estate Planning Practitioner certified by 
              Estate Planning Practitioner Limited.
              <br />
              <br />
              Beyond my professional work, I serve as the Secretary of the Bengali
              Association Singapore and participate in the Singapore MDRT
              committee, supporting various charitable initiatives.
              <br />
              <br />
              My professional philosophy revolves around a balanced and
              thoughtful approach to wealth management. I believe in setting
              clear goals and creating comprehensive plans that cover both
              short-term needs and long-term dreams. My strategies include wise
              budgeting, smart investments, and regular reviews to adapt to
              changes and ensure continued financial growth.
              <br />
              <br />
              I begin by deeply understanding each client’s unique situation,
              goals, and preferences. I listen closely and develop customized
              plans, which may include budgeting advice, investment strategies
              suited to their risk tolerance, and recommendations for retirement
              or education savings. By accounting for life stages and evolving
              needs, I ensure my strategies remain flexible and effective.
              <br />
              <br />
              Looking ahead, I aspire to further specialize in estate planning
              and sustainable investing. I envision leading a team dedicated to
              delivering innovative financial solutions and exceptional service.
              My ultimate goal is to be a trusted advisor who empowers clients
              to achieve their financial goals with clarity and assurance.
              <br />
              <br />I am always eager to connect with like-minded professionals
              and individuals seeking comprehensive financial planning. Let’s
              connect and explore how I can assist you in achieving your
              financial aspirations.
            </p>
          </div>
          <div className="flex space-x-4 mt-7">
            <a
              href="https://www.facebook.com/dibyendu.haldar.73/"
              className="text-white hover:text-blue-800"
              target="_blank"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://www.instagram.com/financewithdib/"
              className="text-white hover:text-pink-800"
              target="_blank"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/dibyendu-haldar-forlife/"
              className="text-white hover:text-blue-800"
              target="_blank"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://www.youtube.com/@FINWIZWithDibyendu"
              className="text-white hover:text-red-800"
              target="_blank"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutMeCard;
