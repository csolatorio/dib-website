import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    "Home",
    "About",
    "Services",
    "Awards",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav className="bg-[#001A29] text-white px-6 py-4 relative z-50 shadow-md">
      <div className="flex items-center justify-between md:gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-15 w-auto object-contain" />
        </a>

        {/* Desktop Navigation + CTA */}
        <div className="hidden md:flex items-center gap-6 text-sm font-light">
          <ul className="flex gap-10">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#F2C98B] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-[#F2C98B] text-[#001A29] font-semibold px-8 py-3 rounded-lg ml-30 mr-20 hover:opacity-90 transition">
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="text-[#F2C98B]" size={28} />
            ) : (
              <Menu className="text-[#F2C98B]" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-[#001A29] px-6 py-4 shadow-lg flex flex-col text-sm font-light animate-slide-down space-y-3">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-[#F2C98B] transition">
              {link}
            </a>
          ))}
          <button className="bg-[#F2C98B] text-[#001A29] font-semibold px-4 py-2 rounded-md">
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
