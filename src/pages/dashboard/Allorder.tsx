/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteOrderMutation,
  useGetAllOrderQuery,
  useUpdateorderMutation,
} from "@/redux/features/orders/OrderApi";
import {
  MoreVertical,
  Trash2,
  CheckCircle,
  Clock,
  Loader2,
} from "lucide-react";

import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Allorder = () => {
  const {
    data: ordersResponse,
    isLoading,
    isError,
    refetch,
  } = useGetAllOrderQuery("");

  const [deletedata] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateorderMutation();

  const orders = ordersResponse?.data || [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-green-600" />
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500">Error fetching orders</div>
    );

  const handleDeleteProduct = async (id: string) => {
    try {
      await deletedata(id);
      refetch();
      toast.success("Order deleted successfully");
    } catch (err: any) {
      toast.error("Cannot delete order");
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "Success" ? "Pending" : "Success";

    try {
      await updateOrder({
        productId: id,
        updatedProduct: { paymentStatus: newStatus },
      });
      refetch();

      toast.success(`Order marked as ${newStatus}!`);
    } catch (err) {
      toast.error("Failed to update order status");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((data: any) => (
            <tr
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              key={data?._id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.user.email}
              </th>
              <td className="px-6 py-4">{data.paymentId}</td>
              <td className="px-6 py-4">{data.quantity}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    data.paymentStatus === "Success"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {data.paymentStatus}
                </span>
              </td>
              <td className="px-6 py-4">{data.totalPrice}</td>
              <td className="px-6 py-4 relative">
                <Popover>
                  <PopoverTrigger>
                    {" "}
                    <MoreVertical className="w-5 h-5" />
                  </PopoverTrigger>
                  <PopoverContent className="w-fit p-0">
                    <ul className=" text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <button
                          onClick={() => handleDeleteProduct(data._id)}
                          className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete Order
                        </button>
                      </li>

                      <li>
                        <button
                          onClick={() =>
                            handleToggleStatus(data._id, data.paymentStatus)
                          }
                          className="flex items-center gap-2 w-full px-4 py-2 text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {data.paymentStatus === "Success" ? (
                            <div className="text-yellow-500 flex gap-2 items-center">
                              <Clock className="w-4 h-4" />
                              Mark as Pending
                            </div>
                          ) : (
                            <div className="text-green-500 flex gap-2 items-center">
                              <CheckCircle className="w-4 h-4" />
                              Mark as Success
                            </div>
                          )}
                        </button>
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allorder;
