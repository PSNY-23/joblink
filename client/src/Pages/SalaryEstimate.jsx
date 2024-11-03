import React from "react";

const SalaryEstimate = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 max-md:px-5">
      <div className="">
        <img className="h-60" src="/images/error.png" alt="error" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Page Under Construction
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        We're working hard to bring this page to you. Please check back later!
      </p>
      <a
        href="/"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default SalaryEstimate;
