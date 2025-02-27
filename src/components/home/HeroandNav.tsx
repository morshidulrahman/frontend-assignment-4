/* eslint-disable @typescript-eslint/no-explicit-any */
import UseUser from "@/hook/UseUser";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { Menu, X } from "lucide-react";

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = UseUser();
  const location = useLocation();
  useEffect(() => {
    const fixedRoutes = ["/about", "/allProducts"];

    const isFixedRoute =
      fixedRoutes.includes(location.pathname) ||
      location.pathname.startsWith("/products/") ||
      location.pathname.startsWith("/checkout/");

    if (isFixedRoute) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully");
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1D2A1F] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl text-white">
            Autotrader
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <Popover>
                <PopoverTrigger className="hidden md:flex">
                  <Avatar>
                    <AvatarImage
                      className="w-10 h-10"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>
                      {(user as any)?.email?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col w-40 text-center text-sm font-semibold bg-white shadow-md rounded-md">
                  <Link to="/dashboard" className="p-2 hover:bg-gray-200">
                    Dashboard
                  </Link>
                  <button
                    className="p-2 hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="hidden md:flex space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 border rounded-md bg-white text-gray-800 hover:bg-green-500 hover:border-green-500 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 border rounded-md bg-white text-gray-800 hover:bg-green-500 hover:border-green-500 hover:text-white"
                >
                  Sign Up
                </Link>
              </div>
            )}

            <button onClick={toggleMenu} className="text-white md:hidden">
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#1D2A1F] text-white shadow-lg z-40 transform transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-4 mt-20">
          <Link
            to="/"
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:text-gray-300"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white text-black px-3 py-2 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-black px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-black px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default NavbarComponent;
