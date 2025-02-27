/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteUserMutation,
  useGetAlluserQuery,
  useUpdateuserMutation,
} from "@/redux/features/users/userApi";
import { MoreVertical, Trash2, Ban, Unlock, Loader2 } from "lucide-react";

import { toast } from "sonner";
import moment from "moment";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export interface TUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;
  createdAt: string;
}
const Alluser = () => {
  const {
    data: usersResponse,
    isLoading,
    isError,
    refetch,
  } = useGetAlluserQuery("");

  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateuserMutation();

  const users = usersResponse?.data || [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-green-600" />
      </div>
    );

  if (isError)
    return <div className="text-center text-red-500">Error fetching users</div>;

  const handleDeleteUser = async (id?: string) => {
    if (!id) {
      toast.error("User ID is missing");
      return;
    }
    try {
      await deleteUser(id);
      refetch();
      toast.success("User deleted successfully");
    } catch (err) {
      console.error("Delete Error:", err);
      toast.error("Cannot delete user");
    }
  };

  const handleToggleBlock = async (id?: string, isBlocked?: boolean) => {
    if (!id) {
      toast.error("User ID is missing");
      return;
    }
    try {
      await updateUser({
        userId: id,
        updateduser: { isBlocked: !isBlocked },
      });
      refetch();
      toast.success(
        isBlocked ? "User unblocked successfully" : "User blocked successfully"
      );
    } catch (err) {
      console.error("Block/Unblock Error:", err);
      toast.error("Failed to update user status");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Joined
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: TUser) => {
            if (!user._id) return null;
            return (
              <tr
                className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                key={user._id}
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {user.name}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      user.isBlocked ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {user.isBlocked ? "Blocked" : "Active"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {moment(user.createdAt).format("DD MMM YYYY")}
                </td>
                <td className="px-6 py-4 relative">
                  <Popover>
                    <PopoverTrigger>
                      <MoreVertical className="w-5 h-5" />
                    </PopoverTrigger>
                    <PopoverContent className="w-fit p-0">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete User
                          </button>
                        </li>

                        <li>
                          <button
                            onClick={() =>
                              handleToggleBlock(user._id, user.isBlocked)
                            }
                            className="flex items-center gap-2 w-full px-4 py-2 text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {user.isBlocked ? (
                              <div className="text-green-500 flex gap-2 items-center">
                                <Unlock className="w-4 h-4" />
                                Unblock User
                              </div>
                            ) : (
                              <div className="text-red-500 flex gap-2 items-center">
                                <Ban className="w-4 h-4" />
                                Block User
                              </div>
                            )}
                          </button>
                        </li>
                      </ul>
                    </PopoverContent>
                  </Popover>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;
