/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Loader2, VenusAndMars } from "lucide-react";

// Define Product Type
export interface TProduct {
  _id: string;
  name: string;
  brand: string;
  category: string;
  model: string;
  available: boolean;
  price: number;
  location: string;
  miles: string;
  transmission: string;
  fuel: string;
  seats: number;
  image: string;
  rating: number;
  reviews: number;
  data?: TProduct;
}

type Filters = {
  searchTerm: string;
  category: string;
  brand: string;
  model: string;
  availability: string;
  priceRange: number[];
};

const AllProductsPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
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
  const products: TProduct[] = productsResponse?.data || [];

  const minPrice = Math.min(...products.map((p) => p.price), 0);
  const maxPrice = Math.max(...products.map((p) => p.price), 50000);

  const getUniqueValues = <K extends keyof TProduct>(key: K): string[] => [
    ...new Set(products.map((p) => String(p[key]))),
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
        <Loader2 className="animate-spin w-10 h-10 text-green-600" />
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
        className="relative h-80 bg-cover rounded-xl hidden lg:flex"
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

            {(["category", "brand", "model"] as (keyof Filters)[]).map(
              (key) => (
                <select
                  key={key}
                  value={filters[key] as string}
                  onChange={(e) =>
                    setFilters({ ...filters, [key]: e.target.value })
                  }
                  className="border rounded-lg px-4 py-2 w-full"
                >
                  <option value="">
                    All {key.charAt(0).toUpperCase() + key.slice(1)}s
                  </option>
                  {getUniqueValues(key as keyof TProduct).map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              )
            )}

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
              <h3 className="text-lg font-semibold mt-2 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <VenusAndMars className="w-4 h-4" /> {product.location}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.price}</span>
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
