import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "./navbar";
import Footer from "../components/footer";
import { useState } from "react";



const ContactForm = () => {
  const [showConsent, setShowConsent] = useState(false);
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
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="mt-1 text-[#F2C98B] h-8 w-auto" />
                <p className="text-xl">+65 9839 3475</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="mt-1 text-[#F2C98B] h-8 w-auto" />
                <p className="text-xl">dibyendu@pruadviser.com.sg</p>
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
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission!"
              />
              <input type="hidden" name="_captcha" value="false" />

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
              />

              <label className="text-sm text-white mb-2 leading-relaxed flex items-start gap-2">
  <input
    type="checkbox"
    id="agree"
    name="agree"
    required
    className="mt-1"
    onChange={(e) => setShowConsent(e.target.checked)}
  />
  <span>
    I agree to the Prudential Data Privacy Notice and consent to be contacted.
  </span>
</label>

{showConsent && (
  <div className="text-sm text-black mb-6 leading-relaxed bg-gray-100 p-4 rounded-lg max-h-64 overflow-y-auto">
    <p>
      By clicking the &quot;Submit&quot; button below, I confirm that I have read,
      understood and given my consent for Prudential Assurance Company Singapore
      and its related corporations, respective representatives, agents, third
      party service providers, contractors and/or appointed
      distribution/business partners (collectively referred to as
      &ldquo;Prudential&rdquo;) to collect, use, disclose and/or process my/our
      personal data for the purpose of contacting me about products and services
      distributed, marketed and/or introduced by Prudential through marketing
      activities via all channels including but not limited to SMS, Social
      Media, In-app Push Notification, Phone Call etc and perusing my contact
      details which Prudential has in its records from time to time and in
      accordance to the Prudential Data Privacy Notice, which is available at{" "}
      <a
        href="https://www.prudential.com.sg/Privacy-Notice"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        www.prudential.com.sg/Privacy-Notice
      </a>.
    </p>

    <br />

    <p>
      I hereby expressly understand and agree that my given consent(s) herein do
      not supersede or replace any other consents and/or previous consents which
      I may have previously given to Prudential in respect of my personal data
      and is without prejudice to any legal rights available to Prudential to
      collect, use or disclose my personal data.
    </p>

    <br />

    <p>
      I understand that I can refer to Prudential Data Privacy, which is
      available at{" "}
      <a
        href="https://www.prudential.com.sg/Privacy-Notice"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        www.prudential.com.sg/Privacy-Notice
      </a>{" "}
      for more information.
    </p>

    <br />

    <p>
      I may contact Dibyendu Haldar, a representative of Prudential Assurance
      Company Singapore at +65 98393475 on how I may access and correct my
      personal data or withdraw consent to the collection, use or disclosure of
      my personal data.
    </p>
  </div>
)}

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

