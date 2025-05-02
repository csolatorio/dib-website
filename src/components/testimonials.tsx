import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mia Song",
    position: "CEO of TechNova Inc",
    content:
      "Absolutely exceeded our expectations. The team was professional, responsive, and truly cared about delivering quality.",
    rating: 4,
  },
  {
    name: "Mia Song",
    position: "CEO of TechNova Inc",
    content:
      "Absolutely exceeded our expectations. The team was professional, responsive, and truly cared about delivering quality.",
    rating: 4,
  },
  {
    name: "Mia Song",
    position: "CEO of TechNova Inc",
    content:
      "Absolutely exceeded our expectations. The team was professional, responsive, and truly cared about delivering quality.",
    rating: 4,
  },
];

const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header + Arrows */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-lg font-medium text-[#001A29]">Testimonials</p>
          <h2 className="text-3xl font-medium text-[#001A29]">
            What <span className="font-bold text-[#001A29]">Our Clients</span>{" "}
            Say
          </h2>
        </div>

        <div className="flex space-x-4">
          <button className="bg-[#F2C98B] text-[#ffffff] p-2 rounded-full shadow-sm">
            <ChevronLeft size={20} />
          </button>
          <button className="bg-[#F2C98B] text-white p-2 rounded-full shadow-sm">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards Row - show only 3 */}
      <div className="flex justify-center gap-6 flex-wrap">
        {testimonials.slice(0, 3).map((t, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] rounded-xl shadow-md w-[400px] p-8 relative"
          >
            {/* Star rating top-right */}
            <div className="absolute top-4 right-4 text-[#F2C98B] text-xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < t.rating ? "★" : "☆"}</span>
              ))}
            </div>

            {/* Quote icon */}
            <Quote className="text-gray-400 w-6 h-6 mb-4" />

            {/* Testimonial text */}
            <p className="text-base text-[#001A29] mb-6">{t.content}</p>

            {/* Footer */}
            <div>
              <p className="font-bold text-md text-[#001A29]">{t.name}</p>
              <p className="font-medium italic text-xs text-[#001A29]">
                {t.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-2">
        <span className="h-5 w-5 rounded-full bg-orange-300" />
        <span className="h-5 w-5 rounded-full bg-orange-100" />
        <span className="h-5 w-5 rounded-full bg-orange-100" />
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
