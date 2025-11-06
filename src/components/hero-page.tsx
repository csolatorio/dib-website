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
             <br />
            <a>
            <br />  
            Plan smart. Protect well. Live fully. <br /> 
            
            <br /> Your peace of mind is my utmost priority. 
            I take time to understand your goals and design clear,comprehensive strategies to build,protect and preserve 
            your wealth-from income protection and accumulation to preservation and distribution-ensuring lasting security 
            for you and your loved ones.
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
