import React from "react";

const About = () => {
  return (
    <div className="w-full h-auto " id="about">
      {/* About title */}
      <div className="flex flex-col justify-center text-center mt-10 px-5 md:px-0">
        <h1 className="text-3xl font-bold">About Our Brand</h1>
        <p className="mt-2 text-gray-600">Passionate About Properties, Dedicated to Your Vision.</p>
      </div>
      {/* About Content */}
      <div className="flex flex-col md:flex-row justify-center text-center md:mt-10 gap-5 md:gap-10 px-5 md:px-40">
        {/* Image */}
        <img
          className="h-auto w-full max-w-lg md:w-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 mt-5 md:mt-0"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="image description"
        />
        {/* Content */}
        <div className="flex flex-col justify-center text-center p-5 md:p-10 rounded-lg">
          <div className="flex md:gap-10 flex-row justify-between">
            <div>
              <h1 className="text-5xl font-bold text-left">10+</h1>
              <p className="text-left text-gray-600">Years of experience</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-left">12+</h1>
              <p className="text-left text-gray-600">Projects Completed</p>
            </div>
          </div>
          <div className="flex md:gap-10 flex-row justify-between mt-5 md:mt-0">
            <div>
              <h1 className="text-5xl font-bold text-left">20+</h1>
              <p className="text-left text-gray-600">Min Sq. Ft. Delivered</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-left">25+</h1>
              <p className="text-left text-gray-600">Ongoing Projects</p>
            </div>
          </div>
          <p className="text-justify md:text-left mt-7 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in
            sapiente quam harum est error perferendis voluptatum, assumenda
            accusamus quisquam deserunt soluta, obcaecati explicabo aliquam
            velit aliquid possimus at voluptatibus!
          </p>

          <div className="flex justify-center md:justify-start mt-10">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
