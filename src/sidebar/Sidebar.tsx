import { useState } from "react";

import { Link } from "react-router-dom";
import { AlignJustify, AppWindow, LogOut, User } from "lucide-react";

import { Car, KeyboardMusic, ShoppingBasket, UsersRound } from "lucide-react";
import MenuItems from "@/pages/dashboard/menu/MenuItems";
import UseUser from "@/hook/UseUser";
import { logout } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
const Sidebar = () => {
  const user = UseUser();
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(logout());
    toast.success("logout successfully");
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/" className="flex gap-2 items-center">
              <img src="/logo-w.png" alt="logo" width="30" height="30" />
              <p className="text-black font-semibold text-lg">Autotrader</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AlignJustify className="w-5 h-5" />
        </button>
      </div>
      {/* sidebar start */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full px-4 py-2 shadow-sm rounded-lg justify-center items-center  mx-auto">
              <Link to="/" className="flex gap-2 items-center">
                <img src="/logo-w.png" alt="logo" width="30" height="30" />
                <p className="text-black font-semibold text-lg">Autotrader</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-2">
            <MenuItems icon={AppWindow} label="Dashboard" address="" />
            {user?.role == "admin" ? (
              <nav>
                <MenuItems
                  icon={Car}
                  label="Add-product"
                  address="add-product"
                />
                <MenuItems
                  icon={KeyboardMusic}
                  label="All Products"
                  address="allProducts"
                />
                <MenuItems
                  icon={ShoppingBasket}
                  label="All Orders"
                  address="allorders"
                />
                <MenuItems
                  icon={UsersRound}
                  label="All users"
                  address="allusers"
                />
              </nav>
            ) : (
              <nav>
                <MenuItems icon={User} label="profile" address="profile" />
              </nav>
            )}
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={handlelogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-primary-jext   hover:text-white transition-colors duration-300 transform rounded-sm"
          >
            <LogOut className="w-5 h-5" />
            <span className="mx-2 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
