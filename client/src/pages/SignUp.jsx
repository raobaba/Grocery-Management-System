import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../services/api";
import Cookies from "js-cookie";

const SignUp = ({ showModal, setShowModal, openModal }) => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    gender: "Male",
    password: "",
  });
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const modalRef = useRef();
  const signInModalRef = useRef();

  const handleCloseSignInModal = (e) => {
    if (signInModalRef.current && !signInModalRef.current.contains(e.target)) {
      setShowSignInModal(false);
      setShowModal(false);
    }
  };

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
        setShowSignInModal(false);
      }
    };
    if (showModal || showSignInModal) {
      document.addEventListener("mousedown", handleCloseModal);
    }
    if (showSignInModal) {
      document.addEventListener("mousedown", handleCloseSignInModal);
    }
    return () => {
      document.removeEventListener("mousedown", handleCloseSignInModal);
    };
  }, [showModal, setShowModal, showSignInModal]);

  const closeModal = () => {
    setShowModal(false);
    setShowSignInModal(false);
  };

  const handleSignUpInputChange = (e) => {
    setSignUpFormData({
      ...signUpFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignInInputChange = (e) => {
    setSignInFormData({
      ...signInFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignUpFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.signUpUser(signUpFormData);
      console.log("SignUp Success:", response);
      setShowSignInModal(true);
      setShowModal(false);
      setSignUpError("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setSignUpError(error.response.data.error);
      } else if (error.message) {
        setSignUpError(error.message);
      } else {
        setSignUpError("An error occurred");
      }
    }
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.signInUser(signInFormData);
      console.log("SignIn Success:", response);
      Cookies.set("userId", response.user._id, { expires: 1 });
      setShowModal(false);
      setShowSignInModal(false);
      setLoginError("");
      navigate('/')
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setLoginError(error.response.data.error);
      } else if (error.message) {
        setLoginError(error.message);
      } else {
        setLoginError("An error occurred");
      }
    }
  };

  const openSignInModal = () => {
    setShowSignInModal(true);
    setShowModal(false);
  };

  const openSignUpModal = () => {
    setShowSignInModal(false);
    setShowModal(true);
  };

  return (
    <>
      <Link to={'/signup'}>
      <button
        onClick={openModal}
        className="rounded-md p-1 w-full text-green-800 font-medium cursor-pointer text-center border border-green-700 no-underline hover:bg-green-700 hover:text-white"
      >
        SIGN UP
      </button>
      </Link>
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 mt-64">
          <div className="flex justify-center items-center h-20">
            <div className="bg-white rounded-lg p-8 w-2/5" ref={modalRef}>
              <h2 className="text-2xl font-bold mb-4 text-center">
                SIGN UP HERE
              </h2>
              <div className="flex justify-center text-center">
                {signUpError && (
                  <p className="text-red-950 font-light text-sm">{signUpError}</p>
                )}
              </div>
              <form onSubmit={handleSignUpFormSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={handleSignUpInputChange}
                    className="border rounded-md p-2 w-full"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleSignUpInputChange}
                    className="border rounded-md p-2 w-full"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="border rounded-md p-2 w-full"
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={handleSignUpInputChange}
                    className="border rounded-md p-2 w-full"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="mt-2 mb-2 flex justify-end">
                  <button
                    type="submit"
                    className=" rounded-md p-1 w-full text-green-800 font-bold text-xl cursor-pointer text-center border border-green-700 no-underline hover:bg-green-700 hover:text-white"
                  >
                    SIGN UP
                  </button>
                </div>
                <div className="text-center mb-4">
                  <p className="text-md text-gray-700">
                    Already have an Account?
                    <Link
                      to={"/signin"}
                      className="ml-1 text-blue-500 hover:underline"
                      onClick={openSignInModal}
                    >
                      Log In here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}{" "}
      {showSignInModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 mt-64">
          <div className="flex justify-center items-center h-20">
            <div className="bg-white rounded-lg p-8 w-2/5" ref={signInModalRef}>
              <h2 className="text-2xl font-bold mb-4 text-center">
                LOGIN HERE
              </h2>
              <div className="flex justify-center text-center">
                {loginError && (
                  <p className="text-red-950 font-light text-sm">{loginError}</p>
                )}
              </div>
              <form onSubmit={handleLoginFormSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={handleSignInInputChange}
                    className="border rounded-md p-2 w-full"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={handleSignInInputChange}
                    className="border rounded-md p-2 w-full"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mt-4 mb-4 flex justify-end">
                  <button
                    type="submit"
                    className=" rounded-md p-1 w-full text-green-800 font-bold text-xl cursor-pointer text-center border border-green-700 no-underline hover:bg-green-700 hover:text-white"
                  >
                    SIGN IN
                  </button>
                </div>
                <div className="text-center mb-4">
                  <p className="text-md text-gray-700">
                    Don't have an account?
                    <Link
                      to={"/signup"}
                      className="ml-1 text-blue-500 hover:underline"
                      onClick={openSignUpModal}
                    >
                      Sign Up here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
