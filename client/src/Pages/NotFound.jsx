import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img
        src="./images/notfound.png"
        alt="Page not found"
        className="w-1/2 md:w-1/3 mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
