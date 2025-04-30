import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#002B3A]">
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
              <p className="text-xl">dibyendu@pruadviser.com.sg</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full max-w-md bg-transparent">
          <p className="text-xl text-gray-200 mb-10">
            Have questions or ready to get started? I’d love to hear from you.
          </p>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-2 rounded bg-gray-100 text-black"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-2 rounded bg-gray-100 text-black"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-100 text-black"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 rounded bg-gray-100 text-black"
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
    </div>
  );
};

export default ContactForm;
