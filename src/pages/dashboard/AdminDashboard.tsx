import { useGetAlldataQuery } from "@/redux/features/admin/adminapi";
import { useGetAllOrderQuery } from "@/redux/features/orders/OrderApi";
import { Loader2, ShoppingBag, Users, DollarSign, Package } from "lucide-react";

const AdminDashboard = () => {
  const { data, error, isLoading } = useGetAlldataQuery("");
  const { data: orderResponse } = useGetAllOrderQuery("");

  const orders = orderResponse?.data || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-green-600" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">Failed to load data.</p>;
  }

  return (
    <div className="container mx-auto px-5 flex flex-col mt-10">
      <h1 className="font-bold text-3xl md:pr-20 mb-6">
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

      <div className="bg-white rounded-md  p-6 drop-shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-green-500">
            Recent Orders
          </h2>
        </div>
        <div className="space-y-4">
          {orders
            .slice(0, 5)
            .map(
              (order: {
                _id: string;
                productImage: string;
                productName: string;
                quantity: number;
                totalPrice: number;
                paymentStatus: string;
              }) => (
                <div
                  key={order._id}
                  className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-md   border border-gray-100 transition duration-200"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={order.productImage}
                      alt={order.productName}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {order.productName}
                      </h3>
                      <p className="text-sm text-gray-900">
                        Quantity: {order.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-500">
                      ${order.totalPrice}
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        order.paymentStatus === "Success"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 w-60 text-center border border-gray-200">
      <div className="p-3 bg-gray-100 rounded-full mb-3">{icon}</div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default AdminDashboard;
