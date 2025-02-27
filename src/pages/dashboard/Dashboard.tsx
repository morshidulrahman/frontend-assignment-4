import UseUser from "@/hook/UseUser";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const user = UseUser();

  return user?.role === "admin" ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;
