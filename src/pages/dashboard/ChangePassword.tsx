/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { useState } from "react";

import { toast } from "sonner";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [changePassword, { isLoading, error }] = useChangePasswordMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await changePassword({
        oldPassword,
        newPassword,
      }).unwrap();
      toast.success("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to change password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[50%] mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Old Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">New Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            disabled={isLoading}
          >
            {isLoading ? "Changing..." : "Change Password"}
          </button>
          {error && <p className="text-red-500 text-sm">{"Error occurred"}</p>}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
