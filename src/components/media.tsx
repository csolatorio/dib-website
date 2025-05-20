import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Footer from "../components/footer";
import Navbar from "./navbar";

const socialMediaData = [
  {
    name: "Facebook",
    icon: <FaFacebookF className="text-blue-600" />,
    followers: "1K",
    description: "Follow us on Facebook for latest updates",
    link: "https://www.facebook.com/dibyendu.haldar.73/",
  },
  {
    name: "LinkedIN",
    icon: <FaLinkedinIn className="text-sky-400" />,
    followers: "1.7K",
    description: "Follow us on LinkedIN for latest updates",
    link: "https://www.linkedin.com/in/dibyendu-haldar-forlife/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    followers: "362",
    description: "See what we're up to on Instagram",
    link: "https://www.instagram.com/financewithdib/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube className="text-red-600" />,
    followers: "2",
    description: "Subscribe to our channel on YouTube",
    link: "https://www.youtube.com/@FINWIZWithDibyendu",
  },
];

export default function SocialMedia() {
  return (
    <div className="relative w-full min-h-screen text-white bg-[#002b3d]">
      <div className="w-full min-h-screen bg-[#002b3d] text-white">
        <Navbar />

        <div className="max-w-5xl mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Follow Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaData.map((platform) => (
              <a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="text-xl font-semibold">{platform.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {platform.description}
                </p>
                <span className="mt-3 text-sm font-medium text-gray-500">
                  {platform.followers} Followers
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
