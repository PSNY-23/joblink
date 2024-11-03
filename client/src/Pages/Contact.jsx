import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formError, setFormError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    setFormSubmitted(false);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all required fields.");
      return;
    }

    // Simulate form submission (replace with your submission logic)
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="container mx-auto px-4 md:px-10 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Get in Touch</h1>
      <p className="text-lg text-gray-700 mb-4 text-center">
        We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out using the form below or through our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Contact Form</h2>
          {formError && <p className="text-red-500 mb-4">{formError}</p>}
          {formSubmitted && <p className="text-green-500 mb-4">Form submitted successfully!</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg text-gray-600 mb-1" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-gray-600 mb-1" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-gray-600 mb-1" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-blue font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Contact Details</h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Email:</strong> pankajteceract@gmail.com
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Phone:</strong> +91 7073843068
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Address:</strong> Banglore, India
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
              <FaFacebook className="mr-2" /> Facebook
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
              <FaTwitter className="mr-2" /> Twitter
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
