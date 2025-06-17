import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "../components/footer";
import Navbar from "./navbar";

const testimonials = [
  {
    name: "Mia Song",
    position: "CEO of TechNova Inc",
    content:
      "Absolutely exceeded our expectations. The team was professional, responsive, and truly cared about delivering quality.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Liam Chen",
    position: "CTO of Innovatech",
    content:
      "Their attention to detail and commitment to excellence is unmatched. We will definitely work with them again.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Ava Patel",
    position: "Founder of DesignLoop",
    content:
      "Brilliant from start to finish. The process was smooth and the results spoke for themselves.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Noah Lee",
    position: "Head of Product at SoftSync",
    content:
      "Great experience. Timely delivery and fantastic support throughout the project.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Emma Garcia",
    position: "Marketing Director at Visionary Hub",
    content:
      "Professional, friendly, and truly talented team. The results blew us away.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "James Kim",
    position: "COO of AgileWorks",
    content:
      "They brought our vision to life with clarity and precision. Highly recommend.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=6",
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const groupSize = 3;
  const totalGroups = Math.ceil(testimonials.length / groupSize);

  const handlePrev = () => {
    setCurrentGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentGroup((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentGroup * groupSize,
    currentGroup * groupSize + groupSize
  );

  return (
    <div className="relative w-full min-h-screen text-white bg-[#002b3d]">
      <div className="w-full min-h-screen bg-[#002b3d] text-white">
        <Navbar />

        <section className="py-20 px-4 max-w-7xl mx-auto" id="testimonials">
          {/* Header + Arrows */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-lg font-medium text-[#F2C98B]">Testimonials</p>
              <h2 className="text-3xl font-medium text-[#F2C98B]">
                What{" "}
                <span className="font-bold text-[#F2C98B]">Our Clients</span>{" "}
                Say
              </h2>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handlePrev}
                className="bg-[#F2C98B] text-[#ffffff] p-2 rounded-full shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="bg-[#F2C98B] text-white p-2 rounded-full shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Cards Row with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center gap-6 flex-wrap"
            >
              {visibleTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-[#D9D9D9] rounded-xl shadow-md w-[400px] p-8 relative"
                >
                  <div className="absolute top-4 right-4 text-[#F2C98B] text-xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < t.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <Quote className="text-gray-400 w-6 h-6 mb-4" />
                  <p className="text-base text-[#001A29] mb-6">{t.content}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-md text-[#001A29]">
                        {t.name}
                      </p>
                      <p className="font-medium italic text-xs text-[#001A29]">
                        {t.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: totalGroups }).map((_, idx) => (
              <span
                key={idx}
                className={`h-5 w-5 rounded-full ${
                  idx === currentGroup ? "bg-orange-300" : "bg-orange-100"
                }`}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsCarousel;
