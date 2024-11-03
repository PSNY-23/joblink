import React from "react";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FcBrokenLink } from "react-icons/fc";

import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuToggler() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-jobs", title: "My Jobs" },
    { path: "/salary-estimate", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-transparent backdrop-blur-md max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between py-5 items-center">
        <a href="/" className="text-2xl flex items-center gap-2">
          <FcBrokenLink className="text-4xl" />

          <span className="font-bold text-[#1976D2]">JobLink</span>
        </a>

        {/* { nav items for large devices} */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => {
            return (
              <li key={path} className="text-base text-primary">
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) =>
                    isActive ? "text-[#1976D2] py-1" : ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* { signup and login button } */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="px-5 py-2 border rounded">
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 border rounded bg-blue text-white"
          >
            Sign Up
          </Link>
        </div>

        {/* { mobile menu view } */}
        <div className="md:hidden block ">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* navitems for mobile  */}
      <div
        className={`px-4 py-5 bg-zinc-900 rounded-md font-semibold ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => {
            return (
              <li
                key={path}
                className="text-base text-white  first:text-blue py-1"
              >
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) =>
                    isActive ? "active bg-zinc-800 py-1 pr-6 rounded-md" : ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
