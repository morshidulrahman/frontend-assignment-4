import { Link } from "react-router-dom";

const SuccefulPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50  p-4">
      <div className="w-full max-w-2xl p-4 bg-white shadow-2xl   sm:p-10 sm:rounded-3xl">
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full dark:bg-green-700">
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-green-600 dark:text-green-100"
              data-slot="icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-400">
            Payment Successful!
          </h1>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            Thank you for your purchase.
          </p>

          <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
            If you have any questions or need further assistance, feel free to
            contact us at:
            <a
              className="font-medium text-green-500   underline"
              href="mailto:autotrader@gmail.com"
            >
              autotrader@gmail.com
            </a>
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-green-500 text-white rounded-lg px-4 py-2 "
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccefulPage;
