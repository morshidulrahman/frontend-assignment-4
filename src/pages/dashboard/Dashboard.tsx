import { useGetAlldataQuery } from "@/redux/features/admin/adminapi";
import { Loader2, ShoppingBag, Users, DollarSign, Package } from "lucide-react";

const Dashboard = () => {
  const { data, error, isLoading } = useGetAlldataQuery("");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">Failed to load data.</p>;
  }

  return (
    <div className="container mx-auto px-5 flex flex-col mt-10">
      <h1 className="font-bold text-3xl md:pr-20   mb-6">
        Welcome to your Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <DashboardCard
          title="Total Products"
          value={data?.data.totalProduct}
          icon={<ShoppingBag className="text-blue-600" />}
        />
        <DashboardCard
          title="Total Users"
          value={data?.data.totalUser}
          icon={<Users className="text-green-600" />}
        />
        <DashboardCard
          title="Total Revenue"
          value={`$${data?.data.totalRevenue.toLocaleString()}`}
          icon={<DollarSign className="text-yellow-600" />}
        />
        <DashboardCard
          title="Total Orders"
          value={data?.data.totalorder}
          icon={<Package className="text-red-600" />}
        />
      </div>
    </div>
  );
};

// 🟢 Reusable Card Component
const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 w-60 text-center border border-gray-200">
      <div className="p-3 bg-gray-100 rounded-full mb-3">{icon}</div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Dashboard;
