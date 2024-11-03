import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function About() {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 md:px-10 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">About Us</h1>
      <img 
        src="/images/about.jpeg" // Replace with your actual image path
        alt="About Us" 
        className="h-auto w-full md:w-2/3 mx-auto mb-6 rounded-lg shadow-lg"
      />
      <p className="text-lg text-gray-700 mb-4">
        Welcome to Job Finder, your trusted platform for discovering exciting
        job opportunities. We are dedicated to connecting job seekers with
        employers, ensuring that you find the right fit for your career
        aspirations.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to simplify the job search process. We understand that
        searching for a job can be overwhelming, which is why we’ve created an
        intuitive platform that makes it easy to find listings that match your
        skills and interests.
      </p>
      
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-500">Why Choose Us?</h2>
      <div className="mb-6">
        {[
          { title: "Wide Range of Job Listings", content: "Explore various job categories and industries." },
          { title: "User-Friendly Interface", content: "Our platform is designed for ease of use." },
          { title: "Tailored Job Recommendations", content: "Receive personalized job suggestions based on your profile." },
        ].map((item, index) => (
          <div key={index} className="border-b mb-2">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center cursor-pointer py-3 px-4 hover:bg-gray-200 transition"
            >
              <span className="text-xl font-bold">{item.title}</span>
              <span>{open === index ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                open === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-4 pb-3 text-gray-700">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-500">Our Vision</h2>
      <p className="text-lg text-gray-700 mb-4">
        At Job Finder, we envision a world where every individual can find
        meaningful employment that aligns with their skills and passions. We
        strive to create a positive impact in the lives of job seekers and
        employers alike.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-500">Get In Touch</h2>
      <p className="text-lg text-gray-700 mb-4">
        We’d love to hear from you! Whether you have questions, feedback, or
        need assistance, please feel free to reach out to us through our contact
        page.
      </p>

      <div className="flex justify-center mt-8">
        <a
          href="/contact"
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default About;
