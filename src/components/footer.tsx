// components/Footer.tsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-14 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-12">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Dibyendu Haldar Logo" className="h-24" />
          </div>{" "}
          <span className="text-2xl font-bold text-[#001A29]">
            DIBYENDU HALDAR
          </span>
          <p className="text-sm text-[#001A29] font-semibold">
            Your Partner in Financial Clarity & Growth.
          </p>
          <p className="text-sm text-[#001A29] font-semibold">
            The opinions expressed are solely those of Dibyendu Haldar in his personal capacity<br />
            and do not represent the views or opinions of any organization.This content is shared <br />
            for general information only.
          </p> Approval Code-AT15Jan26MB52
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[#001A29] mb-2">Quick Links</h4>
          <ul className="space-y-1 text-[#001A29] text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-me" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/media" className="hover:underline">
                Media
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-[#001A29] mb-2">Get in Touch</h4>
          <p className="text-sm font-semibold text-[#001A29]">
            dibyendu@pruadviser.com.sg
          </p>
          <p className="text-sm text-[#001A29]">+65 98393475</p>
          <p className="text-sm text-[#001A29]">
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3">
            <a
              href="https://www.facebook.com/dibyendu.haldar.73/"
              className="text-[#001A29] hover:text-blue-800"
              target="_blank"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/financewithdib/"
              className="text-pink-600 hover:text-pink-800"
              target="_blank"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/dibyendu-haldar-forlife/"
              className="text-black hover:text-gray-800"
              target="_blank"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.youtube.com/@FINWIZWithDibyendu"
              className="text-black hover:text-gray-800"
              target="_blank"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
