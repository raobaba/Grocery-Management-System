import React, { useState, useEffect } from "react";
import AppLogo from "../assets/app-logo.png";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="MainNavbar flex justify-between bg-gradient-to-r from-gray-400 via-yellow-500 to-indigo-300 md:w-full lg:w-full w-full h-16 mx-auto top-0 shadow-md font-sans rounded-bl-5 rounded-br-5 backdrop-blur z-10 m-auto sticky">
      <div className="Logo mt-2 ml-10 transition-opacity h-16 duration-300 ease-in-out">
        <Link to="/">
          <img
            className="mt-[-8px] ml-1"
            src={AppLogo}
            alt="logo"
            width={60}
            height={60}
          />
        </Link>
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

      <div className="mr-10 mt-3 w-24 h-12">
        <SignUp
          showModal={showModal}
          setShowModal={setShowModal}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default Navbar;
