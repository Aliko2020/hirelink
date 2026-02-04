import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 text-[#0f2385] ">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-0">
        <Link to="/" className="font-semibold">
          H Link
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li>
            <Link to="/" className="hover:">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:">
              Post a Job
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-[#0f2385] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Link to="/" className="text-white font-semibold">
            Logo
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col mt-4 gap-4 text-white px-4">
          <li>
            <Link
              to="/"
              className="block hover:"
              onClick={() => setIsOpen(false)}
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block hover:"
              onClick={() => setIsOpen(false)}
            >
              Post a Job
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
