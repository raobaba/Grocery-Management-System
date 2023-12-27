import React, { useState, useEffect } from "react";
import AppLogo from "../assets/app-logo.png";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShowDrawer(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="MainNavbar flex justify-between bg-gradient-to-r from-gray-400 via-yellow-500 to-indigo-300 md:w-full lg:w-full w-full h-16 mx-auto top-0 shadow-md font-sans rounded-bl-5 rounded-br-5 backdrop-blur z-10 m-auto sticky">
      <div
        className={`Logo mt-2 ml-10 transition-opacity h-16 duration-300 ease-in-out ${
          showDrawer ? "hide-logo opacity-0 pointer-events-none" : ""
        }`}
      >
         <NavLink
          to="/" >
          <img
            className="mt-[-10px] ml-1"
            src={AppLogo}
            alt="logo"
            width={60}
            height={60}
          />
        </NavLink>
      </div>

      <div className="desk-navbar flex justify-between items-center lg:w-70 w-2/5">
        <Link
          className="no-underline w-24 h-8 rounded-full font-plusjakartasans text-gray-700 text-md font-semibold border border-transparent hover:border-green-900 hover:rounded-full transition duration-300 flex items-center justify-center"
          to="/"
        >
          HOME
        </Link>

        <Link
          className="no-underline w-24 h-8 rounded-full font-plusjakartasans text-gray-700 text-md font-semibold border border-transparent hover:border-green-900 hover:rounded-full transition duration-300 flex items-center justify-center"
          to="/updated"
        >
          UPDATED
        </Link>

        <Link
          className="no-underline w-24 h-8 rounded-full font-plusjakartasans text-gray-700 text-md font-semibold border border-transparent hover:border-green-900 hover:rounded-full transition duration-300 flex items-center justify-center"
          to="/deleted"
        >
          DELETED
        </Link>

        <Link
          className="no-underline w-24 h-8 rounded-full font-plusjakartasans text-gray-700 text-md font-semibold border border-transparent hover:border-green-900 hover:rounded-full transition duration-300 flex items-center justify-center"
          to="/analytics"
        >
          ANALYTICS
        </Link>

        <Link
          className="no-underline w-24 h-8 rounded-full font-plusjakartasans text-gray-700 text-md font-semibold border border-transparent hover:border-green-900 hover:rounded-full transition duration-300 flex items-center justify-center"
          to="/setting"
        >
          SETTINGS
        </Link>
      </div>

      <div class="mr-10 mt-3 w-24 h-12">
        <Link
          to="/signin"
          className="SignInButton rounded-lg border h-10 w-20 text-green-800 font-bold cursor-pointer text-center border-green-700 no-underline hover:bg-green-700 hover:text-white flex items-center justify-center transition duration-300 ease-in-out"
        >
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
