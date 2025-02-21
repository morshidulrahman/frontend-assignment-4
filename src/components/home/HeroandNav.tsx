import UseUser from "@/hook/UseUser";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = UseUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? "fixed top-0 bg-[#1D2A1F] border-none" : " !bg-[#1D2A1F]"
        }  shadow-md z-50`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-white">Autotrader</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-white">
              About
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <Avatar>
                <AvatarImage
                  className="w-10 h-10"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>{user?.email}</AvatarFallback>
              </Avatar>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-semibold text-sm  hidden md:block border bg-white border-gray-50 px-4 py-2 hover:bg-green-500 transition-all hover:border-green-500 hover:text-white rounded-md"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="font-semibold text-sm  hidden md:block border bg-white border-gray-50 px-4 py-2 hover:bg-green-500 transition-all hover:border-green-500 hover:text-white rounded-md"
                >
                  Sign Up
                </Link>
              </>
            )}

            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md z-40 transform transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="px-6 py-4">
          <a href="#" className="block text-gray-800 hover:text-gray-600 py-2">
            Home
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 py-2">
            Vehicles
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 py-2">
            Declare
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 py-2">
            Shop
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 py-2">
            Pages
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 py-2">
            News
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 py-2">
            Contact
          </a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 py-2">
            Login
          </a>
          <a
            href="#"
            className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
          >
            Add Listing
          </a>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default NavbarComponent;
