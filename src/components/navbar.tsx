import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeEffect, setActiveEffect] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-me" },
    { name: "Services", href: "/services" },
    { name: "Awards", href: "/awards-recognition" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact-us" },
  ];

  // Handler to add effect on click
  const handleClickEffect = (name: string) => {
    setActiveEffect(name);
    setTimeout(() => setActiveEffect(null), 300); // duration of effect
  };

  return (
    <nav className="bg-[#001A29] text-white px-6 py-4 relative z-50 shadow-md ">
      <div className="flex items-center justify-between md:gap-6 px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-15 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation + CTA */}
        <div className="hidden md:flex items-center gap-6 text-sm font-light">
          <ul className="flex gap-10">
            {links.map((link) => {
              const isActive = activeEffect === link.name;
              return (
                <li key={link.name}>
                  {link.href.startsWith(" ") ? (
                    <a
                      href={link.href}
                      className={`hover:text-[#F2C98B] transition ${
                        isActive ? "animate-pulse text-[#F2C98B]" : ""
                      }`}
                      onClick={() => handleClickEffect(link.name)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`hover:text-[#F2C98B] transition ${
                        isActive ? "animate-pulse text-[#F2C98B]" : ""
                      }`}
                      onClick={() => handleClickEffect(link.name)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href="https://calendly.com/dib-haldar/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F2C98B] text-[#001A29] font-semibold px-8 py-3 rounded-lg ml-30 mr-20 hover:opacity-90 transition"
          >
            Book a Call
          </a>
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
          {links.map((link) => {
            const isActive = activeEffect === link.name;
            return link.href.startsWith(" ") ? (
              <a
                key={link.name}
                href={link.href}
                className={`hover:text-[#F2C98B] transition ${
                  isActive ? "animate-pulse text-[#F2C98B]" : ""
                }`}
                onClick={() => {
                  handleClickEffect(link.name);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`hover:text-[#F2C98B] transition ${
                  isActive ? "animate-pulse text-[#F2C98B]" : ""
                }`}
                onClick={() => {
                  handleClickEffect(link.name);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="https://calendly.com/dib-haldar/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F2C98B] text-[#001A29] font-semibold px-4 py-2 rounded-md text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
