import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "./navbar";
import Footer from "../components/footer";

const ContactForm = () => {
  return (
    <div className="w-full min-h-screen bg-[#002b3d] text-white">
      <Navbar />
      <section className="flex justify-center items-center min-h-screen bg-[#002B3A]">
        <div className="bg-[#002B3A] text-white p-6 flex flex-col lg:flex-row justify-between items-start gap-12 max-w-6xl w-full">
          {/* Left Section */}
          <div className="max-w-md space-y-6">
            <div>
              <h4 className="text-lg text-left text-gray-300">Contact Us</h4>
              <h1 className="text-3xl font-bold mt-2">
                Let’s Talk About Your Goals
              </h1>
            </div>
            <div className="space-y-4 text-gray-200">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#F2C98B] h-8 w-auto" />
                <p className="text-xl">
                  1 Pasir Panjang Rd Labrador Tower
                  <br />
                  #05-01V Singapore 118479
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="mt-1 text-[#F2C98B] h-8 w-auto" />
                <p className="text-xl">+65 9839 3475</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="mt-1 text-[#F2C98B] h-8 w-auto" />
                <p className="text-xl">hello@dibyenduhaldar.com</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://calendly.com/dib-haldar/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F2C98B] text-[#001A29] font-semibold px-8 py-4 rounded-lg mt-10 hover:opacity-90 transition"
                >
                  Schedule an Appointment
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-md bg-transparent">
            <p className="text-xl text-gray-200 mb-10">
              Have questions or ready to get started? I’d love to hear from you.
            </p>
            <form
              action="https://formsubmit.co/dib.haldar@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Optional: Customize email subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission!"
              />
              {/* Optional: Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Optional: Redirect after submit */}
              {/* <input type="hidden" name="_next" value="https://your-website.com/thank-you" /> */}

              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-1/2 p-2 rounded bg-gray-100 text-black"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-1/2 p-2 rounded bg-gray-100 text-black"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 rounded bg-gray-100 text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full p-2 rounded bg-gray-100 text-black"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full p-2 rounded bg-gray-100 text-black"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#F2C98B] hover:bg-yellow-500 text-black font-semibold py-3 px-10 rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactForm;
