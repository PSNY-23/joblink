import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

function Card({ data }) {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = data;

  return (
    <section className="card p-6 bg-white border-zinc-200 border shadow-lg rounded-lg transition-transform hover:scale-105">
      <Link to={"/"} className="flex gap-6 flex-col sm:flex-row items-start">
        <img
          src={companyLogo}
          alt="logo"
          className="w-16 h-16 object-cover rounded-full shadow-md"
          onError={(e) => (e.target.src = "./images/fallback.png")}
        />
        <div className="flex flex-col justify-between w-full">
          <div className="mb-4">
            <h4 className="text-blue-600 text-sm uppercase tracking-wide font-bold mb-1">
              {companyName}
            </h4>
            <h3 className="text-xl font-semibold text-gray-900">{jobTitle}</h3>
          </div>
          <div className="text-gray-600 text-sm flex flex-wrap gap-4 mb-4">
            <span className="flex items-center gap-2">
              <FiMapPin className="text-blue-500" /> {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="text-blue-500" /> {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign className="text-blue-500" /> ${minPrice} - $
              {maxPrice} {salaryType}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar className="text-blue-500" /> {postingDate}
            </span>
          </div>
          <p className="text-gray-800 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </Link>
    </section>
  );
}

export default Card;
