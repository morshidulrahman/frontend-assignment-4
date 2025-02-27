/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UseUser from "@/hook/UseUser";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = UseUser();
  return (
    <div className="h-screen w-full items-center justify-center flex flex-col container mx-auto px-4">
      <div className="w-full lg:w-1/2 rounded-xl border shadow-sm">
        <div className="bg-green-600 min-h-40 w-full rounded-t-xl relative">
          <div className="absolute left-[30%] md:left-[40%] -bottom-20">
            <Avatar className="w-28 h-28 ">
              <AvatarImage
                className="w-full h-full"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>{(user as any)?.email}</AvatarFallback>
            </Avatar>
            <div className="mt-2 border px-3 py-1 rounded-full bg-green-500 text-white font-semibold capitalize text-center ">
              {user?.role}
            </div>
          </div>
        </div>
        <div className="px-5 pt-28 pb-10 flex justify-between md:flex-row flex-col md:gap-1 gap-3">
          <div className="flex flex-col  ">
            <p className="font-semibold">Name:</p>
            <p className=" "> {(user as any)?.name}</p>
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold">Email:</p>
            <p className=" "> {(user as any)?.email}</p>
          </div>
          <Link
            to={"/dashboard/changepassword"}
            className="bg-green-500 px-3 rounded-md text-white py-3"
          >
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
