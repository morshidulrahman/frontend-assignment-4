/* eslint-disable @typescript-eslint/no-explicit-any */
import UseUser from "@/hook/UseUser";
import { useGetSingleOrderQuery } from "@/redux/features/orders/OrderApi";
import { ShoppingBag, Clock, CheckCircle, Loader2 } from "lucide-react";

const UserDashboard = () => {
  const user = UseUser();

  const {
    data: ordersResponse,
    isError,
    isLoading,
  } = useGetSingleOrderQuery((user as any)?.email);

  const orders = ordersResponse?.data || [];

  if (isError) {
    return <div>Error fetching orders</div>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-green-600" />
      </div>
    );
  }

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (order: { paymentStatus: string }) => order.paymentStatus === "pending"
  ).length;
  const completedOrders = orders.filter(
    (order: { paymentStatus: string }) => order.paymentStatus === "Success"
  ).length;
  const totalSpent = orders.reduce(
    (sum: number, order: { totalPrice: number }) => sum + order.totalPrice,
    0
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="font-bold text-3xl md:pr-20   mb-6">
        Welcome to your Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-md drop-shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 text-sm">Total Orders</p>
              <h3 className="text-2xl font-bold text-green-500">
                {totalOrders}
              </h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md  drop-shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 text-sm">Pending Orders</p>
              <h3 className="text-2xl font-bold text-green-500">
                {pendingOrders}
              </h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md  drop-shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 text-sm">Completed Orders</p>
              <h3 className="text-2xl font-bold text-green-500">
                {completedOrders}
              </h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md  drop-shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-900 text-sm">Total Spent</p>
              <h3 className="text-2xl font-bold text-green-500">
                ${totalSpent.toFixed(2)}
              </h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
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

export default UserDashboard;
