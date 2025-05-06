import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import award1 from "../assets/award1.png";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";
import award5 from "../assets/award5.png";
import award6 from "../assets/award6.jpg";
import award7 from "../assets/award7.png";

const awards = [
  {
    image: award1,
    title: "Top 4 Private Wealth Consultant – 2022",
    description:
      "Recognized among Singapore’s top financial professionals for performance and client impact.",
  },
  {
    image: award2,
    title: "Platinum Life Club Award",
    description:
      "Honoring excellence in delivering long-term financial value and service to clients.",
  },
  {
    image: award3,
    title: "Premier Award Qualifier",
    description:
      "Earned for consistent performance, client satisfaction, and service excellence.",
  },
  {
    image: award4,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award5,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award6,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
  {
    image: award7,
    title: "MDRT Ambassador & Mentor",
    description:
      "Guiding the next generation of advisors while upholding global professional standards.",
  },
];

const AwardsRecognition: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = awards.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Swipe support
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        nextSlide();
      } else if (endX - startX > 50) {
        prevSlide();
      }
    };

    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="awards">
      <h2 className="text-lg font-medium text-[#001A29]">
        Awards & Recognition
      </h2>
      <h3 className="text-3xl font-medium mt-2 mb-8 text-[#001A29]">
        A Journey Marked by{" "}
        <span className="text-[#001A29] font-bold">Excellence and Trust</span>
      </h3>

      <div className="relative overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {awards.map((award, index) => (
            <div key={index} className="min-w-full px-4 flex-shrink-0">
              <div className="bg-[#F4C381] rounded-xl p-6 shadow-md max-w-md mx-auto h-full flex flex-col">
                <div className="mb-4 flex justify-center">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-auto h-[250px] object-cover rounded-md"
                  />
                </div>
                <h4 className="font-bold text-sm mb-2 text-[#001A29]">
                  {award.title}
                </h4>
                <p className="text-sm text-[#001A29]">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="bg-[#F2C98B] text-white p-2 rounded-full shadow-sm absolute left-2 top-1/2 transform -translate-y-1/2"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#F2C98B] text-white p-2 rounded-full shadow-sm absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {awards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === idx ? "bg-[#001A29]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsRecognition;
