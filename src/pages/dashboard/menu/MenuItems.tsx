import { NavLink } from "react-router-dom";
import { LucideIcon } from "lucide-react";
interface MenuItemsProps {
  address: string;
  label: string;
  icon: LucideIcon;
}
const MenuItems: React.FC<MenuItemsProps> = ({
  address,
  label,
  icon: Icon,
}) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-3 transition-colors duration-300 transform  hover:bg-green-500  text-black hover:text-white rounded-sm ${
          isActive ? "  bg-green-500 text-white" : "text-gray-600"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItems;
