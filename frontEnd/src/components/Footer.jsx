import React from "react";
import {
  AiFillCodeSandboxCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:p-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-2xl font-semibold">Help</p>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="hover:text-yellow-400 hover:underline text-lg font-semibold "
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-400 hover:underline text-lg font-semibold "
          >
            Contact
          </Link>
          <Link
            to="/help"
            className="hover:text-yellow-400 hover:underline text-lg font-semibold "
          >
            Donate Now
          </Link>
        </div>
        <div className="m-8 md:mt-5 text-center">
          <div className="flex justify-between mb-5 md:m-0  text-center">
            <a
              href="https://twitter.com/"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>{" "}
              <AiOutlineTwitter className="w-6 h-6 text-white hover:text-yellow-300" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>{" "}
              <AiFillLinkedin className="w-6 h-6 text-white hover:text-yellow-300" />
            </a>
            <a
              href=""
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>{" "}
              <AiFillGithub className="w-6 h-6 text-white hover:text-yellow-300" />
            </a>
          </div>
          <p className="mt-8">Subscribe to our newsletter:</p>
          <div className="flex mt-3">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l w-3/4"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
