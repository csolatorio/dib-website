import heroBg from "../assets/hero-bg.png";
import Navbar from "./navbar";

const HeroPage = () => {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      <Navbar />

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 md:px-10 py-12 px-6 max-w-7xl mx-auto">
        <div className="w-full max-w-[90%] sm:max-w-xl space-y-4 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Making a Difference to your Financial Future
          </h1>
          <p className="text-2xl sm:text-xl md:text-3xl font-medium">
            Your Partner in Financial Confidence
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Representing Prudential Assurance Company Singapore. <br />
            <a>www.prudential.com.sg/FC-info</a>
            <br />
            Plan smart. Live fully.
            <br /> From securing your legacy with an estate planner, structuring
            your future with a will planner, to growing your assets with a
            wealth planner—we help you protect what you’ve built and prepare for
            what’s ahead.
          </p>
          <div className="flex justify-start mt-10">
            <a
              href="https://calendly.com/dib-haldar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F2C98B] text-black font-semibold px-10 py-4 rounded-lg hover:bg-[#ddb978] transition"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
