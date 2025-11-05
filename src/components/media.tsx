import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Footer from "../components/footer";
import Navbar from "./navbar";
// import dibPortrait from "../assets/dib.png";
import igProfile from "../assets/igProfile.jpg";
import linkProfile from "../assets/linkProfile.jpg";

const socialMediaData = [
  {
    name: "Facebook",
    icon: <FaFacebookF className="text-blue-600" />,
    followers: "1K",
    description: "Follow us on Facebook for latest updates",
    link: "https://www.facebook.com/dibyendu.haldar.73/",
    imgUrl: fbprofile,
      "https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/482024034_9333942016642944_8177076313853915478_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Uj8Z6H2VnlIQ7kNvwEdTvTb&_nc_oc=AdlKOJYyPjBbTd-VTrHhpBDLo4RbVeK_vZL-Hrtp8aGRorjRrpAv1rshQRQ4E7ARr7no-XBZWRtjUPZrAT_WtLyC&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=7v7MUpQ6Bw4n7Hs5GX_txQ&oh=00_AfMRe4q76Y05YYfhkjlSzsQx1UKwvDL55VoATHZzuIMW6A&oe=6856E160",
  },
  {
    name: "LinkedIN",
    icon: <FaLinkedinIn className="text-sky-400" />,
    followers: "1.7K",
    description: "Follow us on LinkedIN for latest updates",
    link: "https://www.linkedin.com/in/dibyendu-haldar-forlife/",
    imgUrl: linkProfile,
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    followers: "362",
    description: "See what we're up to on Instagram",
    link: "https://www.instagram.com/financewithdib/",
    imgUrl: igProfile,
  },
  {
    name: "YouTube",
    icon: <FaYoutube className="text-red-600" />,
    followers: "2",
    description: "Subscribe to our channel on YouTube",
    link: "https://www.youtube.com/@FINWIZWithDibyendu",
    imgUrl:
      "https://yt3.googleusercontent.com/DGJ-F1HMddYYvNK39QaIko6QM6vKj64qfw6Ko7VZZQVaFVFCLRLaVek0he4RWc_85Z59ty27kg=s160-c-k-c0x00ffffff-no-rj", // Replace with actual YouTube channel avatar
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
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src={platform.imgUrl}
                    alt={`${platform.name} profile`}
                    className="h-40 w-40 rounded-full object-cover"
                  />
                </div>
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
