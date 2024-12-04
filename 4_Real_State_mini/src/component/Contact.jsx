import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full h-screen" id="contact">
      {/* Contact Us title */}
      <div className="flex flex-col justify-center text-center mt-10 px-5 md:px-0">
        <h1 className="text-3xl font-bold">Contact With Us</h1>
        <p className="mt-2 text-gray-600">
          Ready to Make a Move? Let’s Build Your Future Together
        </p>
      </div>
      {/* Form */}
      <div className="flex justify-center mt-10 px-5">
        <form className="w-full max-w-4xl bg-white p-8">
          {/* Name and Email Row */}
          <div className="gap-5 flex flex-col md:flex-row w-full mb-5">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="mb-2 text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
          {/* Message */}
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-gray-700 font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Message"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
