import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

function Banner({ query,handleJobPositionChange ,handleJobLocationChange }) {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
       Find Your <span className="text-blue">Dream job</span> today
      </h1>
      <p className="text-lg text-black/70 mb-8">
      Unleash Your Potential: Discover a World of Opportunities in Tech!


      </p>

      <form action="">
        <div className="flex justify-start md:flex-row flex-col gap-5 md:gap-2">
          <div
            className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset
            focus-within:ring-2 focus-within:ring-inset
            focus-within:ring-indigo-600  md:w-1/3 w-full"
          >
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position you are looking for ?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900
                          placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6
                           outline-none"
              onChange={handleJobPositionChange}
              value={query.jobPosition}

            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <div
            className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset
            focus-within:ring-2 focus-within:ring-inset
            focus-within:ring-indigo-600  md:w-1/3 w-full"
          >
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900
                          placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6
                           outline-none"
              onChange={handleJobLocationChange}
              value={query.jobLocation}
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded"
          >Search</button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
