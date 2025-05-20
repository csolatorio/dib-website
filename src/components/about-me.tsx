import React from "react";
import dibPortrait from "../assets/dib.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
              Private Wealth Consultant | Financial Strategist | Philanthropist
            </p>
            <br />
            <br />
            <p className="text-[#c3d5df] text-base leading-relaxed text-justify">
              Over the past nine years, I have transformed challenges into
              opportunities, building a strong foundation of trust and loyalty
              with over 300 families in Singapore. My approach is centered on
              understanding the unique financial needs of each individual,
              crafting customized plans that align with their goals for
              sustainable growth and financial security.
              <br />
              <br />
              Consistently recognized as a top performer, I have earned multiple
              accolades, including being one of the Top 4 Private Wealth
              Consultants in 2022 and a Premier Award qualifier. Honored with
              the Platinum Life Club award, I am committed to excellence in
              financial consulting. I also serve as an MDRT Ambassador and
              Mentor, highlighting my dedication to professional development and
              community service.
              <br />
              <br />
              I specialize in asset management and risk management, and my
              educational background includes a Post Graduate Diploma in
              Management with a focus on Finance & Marketing. I'm certified in
              Financial Need Analysis and Plan Construction, and I’m IBF
              Qualified L1 in Financial Planning.
              <br />
              <br />
              Beyond my professional work, I actively contribute to
              philanthropic efforts. I serve as the Secretary of the Bengali
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutMeCard;
