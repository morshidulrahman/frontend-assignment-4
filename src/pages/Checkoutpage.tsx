import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { toast } from "sonner";

// Load Stripe
const stripePromise = loadStripe(
  "pk_test_51M1YVBL6YvgZDvxuWiJT39NxnF7fG3kDudsD3gOxgUw6WmJusFHhvT4RHti88caAiBMIvOqptpW3smjH3c1mPlZ600PtOgXZj6"
);

// Main Component
const CheckoutPage = () => {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
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

  const handleQuantityChange = (value) => {
    if (value > 0 && value <= product.quantity) {
      setQuantity(value);
    }
    if (product.quantity == value) {
      toast.warning(`${product.quantity} products is available`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: { name: name },
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
        user: { name: name, email: email },
        paymentStatus: "pending",
        paymentId: paymentIntent.id,
      };

      try {
        await axios.post("http://localhost:5000/api/orders", orderData);
        toast.success("orders successfully");
        setLoading(false);
        navigate("/payment/success");
      } catch (err) {
        toast.error("Order could not be saved. Please try again.");
        setLoading(false);
      }
    }
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError || !product) return <h1>Product not found</h1>;

  return (
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
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-2 border rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  className="text-xs font-semibold text-gray-500"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="border border-gray-300 rounded-lg p-4">
                <CardElement />
              </div>
              <button
                type="submit"
                className="mt-4 bg-green-600 text-white py-2.5 px-4 rounded disabled:bg-gray-400"
                disabled={loading}
              >
                {loading ? "Processing..." : "Place Order"}
              </button>
            </form>
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
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-green-800 to-green-400 opacity-95" />
          </div>
          <div className="relative">
            <ul className="space-y-5">
              <li className="flex justify-between">
                <div className="flex">
                  <img
                    alt=""
                    className="max-h-20 rounded-md"
                    src={product.image}
                  />

                  <div className="ml-3">
                    <p className="text-base font-semibold text-white">
                      {product.name}
                    </p>
                    <p className="text-sm font-medium text-white text-opacity-80">
                      {product.brand}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 bg-gray-100 rounded">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        disabled={quantity >= product.quantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-semibold text-white">
                  ${product.price}
                </p>
              </li>
            </ul>
            <div className="my-5 h-0.5 w-full bg-white bg-opacity-30" />
            <div className="space-y-2">
              <p className="flex justify-between text-lg font-bold text-white">
                <span>Total price:</span>
                <span>${totalPrice.toLocaleString()}</span>
              </p>
              <p className="flex justify-between text-sm font-medium text-white">
                <span>Vat: 10%</span>
                <span>${Number(totalPrice) * 0.1}</span>
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
  );
};

const StripeWrapper = () => (
  <Elements stripe={stripePromise}>
    <CheckoutPage />
  </Elements>
);

export default StripeWrapper;
