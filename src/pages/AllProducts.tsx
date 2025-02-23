/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  Armchair,
  CarTaxiFront,
  CircleGauge,
  Fuel,
  Star,
  VenusAndMars,
} from "lucide-react";
const AllProductsPage: React.FC = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
    brand: "",
    model: "",
    availability: "",
    priceRange: [0, 1000000],
  });

  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetAllProductsQuery("");
  const products = productsResponse?.data || [];

  const minPrice = Math.min(...products.map((p) => p.price), 0);
  const maxPrice = Math.max(...products.map((p) => p.price), 50000);

  const getUniqueValues = (value: keyof (typeof products)[0]) => [
    ...new Set(products.map((p: any) => p[value])),
  ];

  const filteredProducts = products.filter((product) => {
    const { searchTerm, category, brand, model, availability, priceRange } =
      filters;

    return (
      (searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === "" || product.category === category) &&
      (brand === "" || product.brand === brand) &&
      (model === "" || product.model === model) &&
      (availability === "" ||
        (availability === "available" && product.available) ||
        (availability === "unavailable" && !product.available)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  if (isError)
    return (
      <div className="text-center text-red-500">Error fetching products</div>
    );

  const resetFilters = () => {
    setFilters({
      searchTerm: "",
      category: "",
      brand: "",
      model: "",
      availability: "",
      priceRange: [minPrice, maxPrice],
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="relative h-80 bg-cover rounded-xl  hidden lg:flex"
        style={{
          backgroundImage:
            "url('https://carento-nextjs.vercel.app/assets/imgs/page-header/banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl pt-10 pl-10 text-center">
          <h1 className="text-4xl text-white font-bold">All Products</h1>
          <p className="text-white mt-2">
            Get the latest news, updates, and tips
          </p>
        </div>

        <div className="absolute -bottom-10 left-16 bg-gray-50 w-[90%] rounded-lg p-10 border">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <input
              type="text"
              placeholder="Search by name, brand, or category"
              value={filters.searchTerm}
              onChange={(e) =>
                setFilters({ ...filters, searchTerm: e.target.value })
              }
              className="border rounded-lg px-4 py-2 w-full"
            />

            {["category", "brand", "model"].map((key) => (
              <select
                key={key}
                value={filters[key]}
                onChange={(e) =>
                  setFilters({ ...filters, [key]: e.target.value })
                }
                className="border rounded-lg px-4 py-2 w-full"
              >
                <option value="">
                  All {key.charAt(0).toUpperCase() + key.slice(1)}s
                </option>
                {getUniqueValues(key as keyof (typeof products)[0]).map(
                  (value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  )
                )}
              </select>
            ))}

            <select
              value={filters.availability}
              onChange={(e) =>
                setFilters({ ...filters, availability: e.target.value })
              }
              className="border rounded-lg px-4 py-2 w-full"
            >
              <option value="">All Availability</option>
              <option value="available">In Stock</option>
              <option value="unavailable">Out of Stock</option>
            </select>

            <div>
              <p className="font-semibold text-gray-700">
                Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </p>
              <Slider
                range
                min={minPrice}
                max={maxPrice}
                value={filters.priceRange}
                onChange={(value) =>
                  setFilters({ ...filters, priceRange: value as number[] })
                }
                trackStyle={[{ backgroundColor: "#4CAF50" }]}
                handleStyle={[
                  { borderColor: "#4CAF50" },
                  { borderColor: "#4CAF50" },
                ]}
                railStyle={{ backgroundColor: "#ccc" }}
              />
            </div>
            <button
              onClick={resetFilters}
              className="border rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="grid grid-cols-1 lg:hidden visible gap-4 border p-4 rounded-lg">
        <input
          type="text"
          placeholder="Search by name, brand, or category"
          value={filters.searchTerm}
          onChange={(e) =>
            setFilters({ ...filters, searchTerm: e.target.value })
          }
          className="border rounded-lg px-4 py-2 w-full"
        />

        {["category", "brand", "model"].map((key) => (
          <select
            key={key}
            value={filters[key]}
            onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
            className="border rounded-lg px-4 py-2 w-full"
          >
            <option value="">
              All {key.charAt(0).toUpperCase() + key.slice(1)}s
            </option>
            {getUniqueValues(key as keyof (typeof products)[0]).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        ))}

        <select
          value={filters.availability}
          onChange={(e) =>
            setFilters({ ...filters, availability: e.target.value })
          }
          className="border rounded-lg px-4 py-2 w-full"
        >
          <option value="">All Availability</option>
          <option value="available">In Stock</option>
          <option value="unavailable">Out of Stock</option>
        </select>

        <div>
          <p className="font-semibold text-gray-700">
            Price: $ {filters.priceRange[0]} - ${filters.priceRange[1]}
          </p>
          <Slider
            className="pl-1"
            range
            min={minPrice}
            max={maxPrice}
            value={filters.priceRange}
            onChange={(value) =>
              setFilters({ ...filters, priceRange: value as number[] })
            }
            trackStyle={[{ backgroundColor: "#4CAF50" }]}
            handleStyle={[
              { borderColor: "#4CAF50" },
              { borderColor: "#4CAF50" },
            ]}
            railStyle={{ backgroundColor: "#ccc" }}
          />
        </div>
        <button
          onClick={resetFilters}
          className="border rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition"
        >
          Reset Filters
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {filteredProducts.map((product) => (
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden border group"
            key={product._id}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover group-hover:scale-105 duration-300 transition-all"
            />
            <div className="p-4 relative">
              <div className="flex items-center justify-between absolute right-2 -top-4 text-sm  ">
                <span className="border bg-gray-100 rounded-lg px-3 py-1 flex items-center gap-1 hover:border-green-500 ">
                  <Star className="w-4 h-4 text-green-400 fill-green-400" />{" "}
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <h3 className="text-lg font-semibold mt-2 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <VenusAndMars className="w-4 h-4" /> {product.location}
              </p>
              <hr className="my-3" />
              <div className="flex justify-between text-sm text-gray-600">
                <span className="text-gray-500 text-sm flex items-center gap-2">
                  <productTaxiFront className="w-4 h-4" /> {product.miles}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-2">
                  <CircleGauge className="w-4 h-4" /> {product.transmission}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span className="text-gray-500 text-sm flex items-center gap-2">
                  <Fuel className="w-4 h-4" /> {product.fuel}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-2">
                  <Armchair className="w-4 h-4" /> {product.seats}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">{product.price}</span>
                <Link to={`/products/${product._id}`}>
                  <button className="border bg-gray-100 rounded-xl px-3 py-2 hover:bg-green-500 hover:text-white duration-300 transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
