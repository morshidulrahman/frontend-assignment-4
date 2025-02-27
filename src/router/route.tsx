import App from "@/App";
import About from "@/components/about/About";

import ProductDetails from "@/components/product/ProductDetails";

import DashboardLayout from "@/layout/DashboardLayout";
import Layout from "@/layout/Layout";
import AllProducts from "@/pages/AllProducts";
import Checkoutpage from "@/pages/Checkoutpage";
import AddProduct from "@/pages/dashboard/AddProduct";
import AdminAllProduct from "@/pages/dashboard/AdminAllProduct";
import Allorder from "@/pages/dashboard/Allorder";
import Alluser from "@/pages/dashboard/AllUser";
import Dashboard from "@/pages/dashboard/Dashboard";
import UpdateProductForm from "@/pages/dashboard/UpdateProductForm";
import Login from "@/pages/Login";

import Register from "@/pages/SignUp";
import SuccefulPage from "@/pages/SuccefulPage";
import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Profile from "@/pages/dashboard/Profile";
import ChangePassword from "@/pages/dashboard/ChangePassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "/allProducts", element: <AllProducts /> },
      { path: "/about", element: <About /> },

      { path: "/products/:id", element: <ProductDetails /> },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkoutpage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "changepassword",
        element: (
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "update-product/:productId",
        element: (
          <AdminRoute>
            <UpdateProductForm />
          </AdminRoute>
        ),
      },
      {
        path: "allProducts",
        element: (
          <AdminRoute>
            <AdminAllProduct />
          </AdminRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <AdminRoute>
            <Allorder />
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            {" "}
            <Alluser />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/payment/success", element: <SuccefulPage /> },
  {
    path: "/signup",
    element: <Register />,
  },
]);
