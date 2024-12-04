import React from "react";
import RahulImg from "../Image/Rahul.png";
import PriyaImg from "../Image/Priya.png";
import AnjaliImg from "../Image/Anjali.jpg";

const testimonials = [
  {
    name: "Rahul Sharma",
    position: "Senior Sales Manager",
    img: RahulImg,
    experience:
      "10+ years in real estate sales, specializing in luxury apartments and commercial spaces. Expert in closing high-value deals and maintaining long-term client relationships.",
  },
  {
    name: "Priya Kapoor",
    position: "Marketing Head",
    img: PriyaImg,
    experience:
      "8 years in real estate marketing, with expertise in digital campaigns, brand building, and property promotion strategies. Known for innovative approaches to attracting premium clientele.",
  },
  {
    name: "Anjali Verma",
    position: "Real Estate Consultant",
    img: AnjaliImg,
    experience:
      "5 years of experience in residential property consulting, helping clients find their dream homes while ensuring a smooth buying process.",
  },
];

const TestimonialCard = ({ name, position, experience, img }) => (
  <div className="border rounded-lg p-6 shadow-lg bg-white flex flex-col items-center text-center">
    <img
      src={img}
      alt={`${name}'s profile`}
      className="w-24 h-24 rounded-full object-cover mb-4"
    />
    <h2 className="text-xl font-semibold">{name}</h2>
    <h3 className="text-sm text-gray-600">{position}</h3>
    <p className="mt-2 text-gray-800">{experience}</p>
  </div>
);

const TestimonialSection = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100" id="testimonials">
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center text-center mt-10 px-5 md:px-0">
          <h1 className="text-4xl font-bold text-gray-800">Testimonials</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Real Stories from Those Who Found Home with Us
          </p>
          <div className="mt-6 w-20 h-1 bg-blue-500 rounded-full"></div>
        </div>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default TestimonialSection;
