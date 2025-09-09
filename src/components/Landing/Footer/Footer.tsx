import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-[#070a1a] text-gray-400 pt-12 pb-3">
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-2 md:items-center">
          <h2 className="text-white text-2xl font-bold">Visual Build</h2>
          <p className="text-gray-400">Build Faster. Code Smarter.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 md:items-center">
          <h3 className="text-white font-semibold mb-2">Navigation</h3>
          <div className="flex flex-col items-start gap-2 md:ml-5">
            <a href="#features" className="hover:text-indigo-500 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-indigo-500 transition">
              Pricing
            </a>
            <a
              href="#how-it-works"
              className="hover:text-indigo-500 transition"
            >
              How It Works
            </a>
            <a href="#faq" className="hover:text-indigo-500 transition">
              FAQ
            </a>
            <a href="#about" className="hover:text-indigo-500 transition">
              About
            </a>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-4 md:items-center">
          <h3 className="text-white font-semibold mb-2">Contact & Follow</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@visualbuild.com"
              className="hover:text-indigo-500 transition"
            >
              support@visualbuild.com
            </a>
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-indigo-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {year} Visual Build. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
