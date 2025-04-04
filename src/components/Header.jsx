import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import { Menu } from "lucide-react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav className="bg-green-300 border-b-3 border-b-gray-600 sticky top-0 z-10">
        <div className="flex justify-between p-3">
          <Link
            to="/"
            className="  text-2xl text-green-700 font-bold flex gap-1 items-center"
          >
            Movie <span className="text-gray-700">Hub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="27"
              width="30"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffa000"
                d="M448 32l-86.1 0-1 1-127 127 92.1 0 1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128l0-64c0-15.1-5.3-29.1-14-40l-104 104L512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM64 32C28.7 32 0 60.7 0 96l0 64 6.1 0 1-1 127-127L64 32zM512 192L0 192 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224z"
              />
            </svg>{" "}
          </Link>
          <div className="gap-10 sapce-x-6 hidden sm:flex">
            <Link
              className="px-2 py-1 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-green-500"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="px-2 py-1 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-green-500"
              to={"/Movie"}
            >
              Movies
            </Link>
            <Link
              className="px-2 py-1 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-green-500"
              to={"/Favourite"}
            >
              Favourites
            </Link>
            <Link className="px-2 py-1 rounded-lg font-semibold text-gray-700 hover:text-white hover:bg-green-500">
              Sign in
            </Link>
          </div>

          <button className="sm:hidden " onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col text-center space-y-1 mb-1 ">
            <Link
              to={"/"}
              className="text-gray-700 font-bold w-full hover:text-white hover:bg-green-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to={"/Movie"}
              className="text-gray-700 font-bold w-full hover:text-white hover:bg-green-700"
              onClick={() => setIsOpen(false)}
            >
              Movie
            </Link>
          </div>
        )}
      </nav>
  );
}

export default Header;
