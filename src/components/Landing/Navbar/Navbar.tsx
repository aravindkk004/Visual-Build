import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between md:px-10 px-5 py-4 max-w-[1500px] mx-auto">
        <h2 className="text-white font-extrabold md:text-4xl sm:text-2xl text-xl">
          VisualBuild
        </h2>
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <p className="text-[#E5E5E5] hover:text-white">Login</p>
          </Link>
          <button
            type="button"
            className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
