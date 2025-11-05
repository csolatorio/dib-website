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
              Private Client Advisor| Master Financial Consultant
            </p>
            <br />
            <br />
            <p className="text-[#c3d5df] text-base leading-relaxed text-justify">
              Over the past decade, I have turned challenges into
              opportunities, and built lasting relationship 
              with over 300 families in Singapore. My goal is simple-to advice 
              individuals and families gain financial confidence through clear,
              personalize and sustainable financial planning.
              <br />
              <br />
              I am grateful to have been consistently recognized as a 
              Private Client Advisor since 2021,with several professional milestones 
              along the way-including being a Premier Award Qualifier since 2018,
              a Life Club Member since 2019, and receiving the 
              Trusted Financial Practitioner Award by IFPAS in 2025.
              As an MDRT Ambassador and Mentor since 2021, I remain 
              passionate about guiding clients and fellow professionals on their journey
              toward growth and success.
              <br />
              <br />
              I specialize in asset management and risk management and hold a 
              Post Graduate Diploma In Management in Finance and Marketing.
              I'm certified in Financial Need Analysis and Plan Construction,
              IBF qualified L1 in Financial Planning and an Estate Planning Practitioner Certified by 
              Estate Planning Practitioner Limited.
              <br />
              <br />
              Beyond my professional work, I serve as the Secretary of the Bengali
              Association Singapore and actively contribute to the MDRT Singapore
              committee and MDRT Foundation,supporting various charitable initiatives.
              <br />
              <br />
              My approach to wealth management is based on balance and clarity-setting clear goals,
              managing risks wisely and adapting strategies as life changes.
              I take time to understand each client's needs and create personalised plans for budgeting,
              investments, retirement and education planning, ensuring their financial journey stays secure and meaningful.
              <br />
              <br />
              Looking ahead, I aim to deepen my expertise in corporate financial planning 
              and sustainable investing, and lead a team that delivers innovative and client-focused financial solutions.
              <br />
              <br />I believe in building trust through genuine relationships and transparent advice.Let’s
              connect and explore how I can advice you plan grow and protect your financial future.
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
