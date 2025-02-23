import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import axios from "axios";
import CheckoutHeader from "@/components/chekout/CheckoutHeader";

// Load Stripe
const stripePromise = loadStripe(
  "pk_test_51M1YVBL6YvgZDvxuWiJT39NxnF7fG3kDudsD3gOxgUw6WmJusFHhvT4RHti88caAiBMIvOqptpW3smjH3c1mPlZ600PtOgXZj6"
);

const Checkoutnew = () => {
  const { id } = useParams();
  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetAllProductsQuery("");
  const products = productsResponse?.data || [];
  const product = products.find((p) => p._id === id);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    }
  }, [product, quantity]);

  useEffect(() => {
    if (totalPrice > 0) {
      axios
        .post("http://localhost:5000/api/create-payment-intent", {
          amount: totalPrice * 100,
        })
        .then(({ data }) => setClientSecret(data.clientSecret));
    }
  }, [totalPrice]);

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value > 0 && value <= product.quantity) {
      setQuantity(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: { name: "Customer Name" },
        },
      }
    );

    if (error) {
      console.error(error.message);
    } else if (paymentIntent?.status === "succeeded") {
      const orderData = {
        productId: product._id,
        productName: product.name,
        productImage: product.image,
        productPrice: product.price,
        quantity,
        totalPrice,
        user: { name: "Customer Name", email: "customer@example.com" },
        paymentStatus: "pending",
        paymentId: paymentIntent.id,
      };

      try {
        await axios.post("http://localhost:5000/api/orders", orderData);
        alert("Order placed successfully!");
      } catch (err) {
        console.error("Order saving failed:", err);
        alert("Order could not be saved. Please try again.");
      }
    }
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !product) return <h1>Product not found</h1>;
  return (
    <Elements stripe={stripePromise}>
      <div className="relative mx-auto w-full bg-white">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Secure Checkout
                <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20" />
              </h1>
              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col space-y-4"
              >
                <div>
                  <label
                    className="text-xs font-semibold text-gray-500"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    id="email"
                    name="email"
                    placeholder="john.capler@fang.com"
                    type="email"
                  />
                </div>
                <p className="text-xl font-bold">
                  Total Price: ${totalPrice.toLocaleString()}
                </p>
                <div className="border border-gray-300 rounded-lg p-4">
                  <CardElement />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-teal-600 text-white py-2.5 px-4 rounded"
                >
                  Place Order
                </button>
              </form>
              <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                By placing this order you agree to the{" "}
                <a
                  className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </p>
              <button
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                type="submit"
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <h2 className="sr-only">Order summary</h2>
            <div>
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95" />
            </div>
            <div className="relative">
              <ul className="space-y-5">
                <li className="flex justify-between">
                  <div className="inline-flex">
                    <img
                      alt=""
                      className="max-h-16"
                      src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-white">
                        Nano Titanium Hair Dryer
                      </p>
                      <p className="text-sm font-medium text-white text-opacity-80">
                        Pdf, doc Kindle
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white">$260.00</p>
                </li>
                <li className="flex justify-between">
                  <div className="inline-flex">
                    <img
                      alt=""
                      className="max-h-16"
                      src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    {/* using make quantity button  */}
                    <button>+</button>value<button>-</button>
                    <div className="ml-3">
                      <p className="text-base font-semibold text-white">
                        Luisia H35
                      </p>
                      <p className="text-sm font-medium text-white text-opacity-80">
                        Hair Dryer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white">$350.00</p>
                </li>
              </ul>
              <div className="my-5 h-0.5 w-full bg-white bg-opacity-30" />
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold text-white">
                  <span>Total price:</span>
                  <span>$510.00</span>
                </p>
                <p className="flex justify-between text-sm font-medium text-white">
                  <span>Vat: 10%</span>
                  <span>$55.00</span>
                </p>
              </div>
            </div>
            <div className="relative mt-10 text-white">
              <h3 className="mb-5 text-lg font-bold">Support</h3>
              <p className="text-sm font-semibold">
                +01 653 235 211{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                support@nanohair.com <span className="font-light">(Email)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                Call us now for payment related issues
              </p>
            </div>
            <div className="relative mt-10 flex">
              <p className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  Money Back Guarantee
                </span>
                <span className="text-xs font-medium text-white">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default Checkoutnew;
