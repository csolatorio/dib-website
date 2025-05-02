const NewsletterSignup = () => {
  return (
    <div className="text-black p-8 rounded-lg max-w-xl mx-auto my-16">
      <h2 className="text-3xl font-bold mb-2 text-center text-[#001A29]">
        Join our newsletter!
      </h2>
      <p className="text-center text-sm mb-6 text-[#001A29]">
        Subscribe to our newsletter for expert financial strategies and market
        insights from Dibyendu Haldar at Prudential Life Singapore.
      </p>
      <form className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="E-mail"
          className="p-3 border border-gray-300 rounded"
        />
        <label className="flex items-center text-sm">
          <input type="checkbox" className="mr-2" />
          Yes, I consent to Prudential Life Sinagpore policies
        </label>
        <button
          type="submit"
          className="bg-[#F2C98B] hover:bg-yellow-500 text-black font-semibold py-3 px-10 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
