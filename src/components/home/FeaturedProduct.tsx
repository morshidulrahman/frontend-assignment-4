import {
  Armchair,
  CarTaxiFront,
  CircleGauge,
  Fuel,
  Star,
  VenusAndMars,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const cars = [
  {
    id: 1,
    name: "Audi A3 1.6 TDI S line",
    location: "Manchester, England",
    miles: "25,100 miles",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: "7 seats",
    price: "$498.25",
    rating: "4.96",
    reviews: "672 reviews",
    img: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png",
  },
  {
    id: 2,
    name: "BMW X5 M Competition",
    location: "London, UK",
    miles: "18,500 miles",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: "5 seats",
    price: "$620.00",
    rating: "4.85",
    reviews: "534 reviews",
    img: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-2.png",
  },
  {
    id: 3,
    name: "Mercedes-Benz GLE 450",
    location: "Berlin, Germany",
    miles: "30,000 miles",
    transmission: "Automatic",
    fuel: "Hybrid",
    seats: "5 seats",
    price: "$550.75",
    rating: "4.92",
    reviews: "450 reviews",
    img: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-3.png",
  },
  {
    id: 4,
    name: "Tesla Model X Plaid",
    location: "Los Angeles, USA",
    miles: "15,200 miles",
    transmission: "Automatic",
    fuel: "Electric",
    seats: "6 seats",
    price: "$750.50",
    rating: "4.99",
    reviews: "802 reviews",
    img: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-4.png",
  },
  {
    id: 5,
    name: "Ford Mustang GT",
    location: "New York, USA",
    miles: "20,800 miles",
    transmission: "Manual",
    fuel: "Petrol",
    seats: "4 seats",
    price: "$580.00",
    rating: "4.87",
    reviews: "623 reviews",
    img: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-5.png",
  },
  {
    id: 5,
    name: "Ford Mustang GT",
    location: "New York, USA",
    miles: "20,800 miles",
    transmission: "Manual",
    fuel: "Petrol",
    seats: "4 seats",
    price: "$580.00",
    rating: "4.87",
    reviews: "623 reviews",
    img: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-5.png",
  },
  {
    id: 5,
    name: "Ford Mustang GT",
    location: "New York, USA",
    miles: "20,800 miles",
    transmission: "Manual",
    fuel: "Petrol",
    seats: "4 seats",
    price: "$580.00",
    rating: "4.87",
    reviews: "623 reviews",
    img: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-5.png",
  },
  {
    id: 5,
    name: "Ford Mustang GT",
    location: "New York, USA",
    miles: "20,800 miles",
    transmission: "Manual",
    fuel: "Petrol",
    seats: "4 seats",
    price: "$580.00",
    rating: "4.87",
    reviews: "623 reviews",
    img: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-5.png",
  },
];

const CarCard = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-5xl font-bold mb-2">Featured Products</h1>
      <p className="text-gray-400 mb-8">The world's leading car brands</p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.slice(0, 6).map((car, index) => (
          <Fade
            key={car.id}
            direction="up"
            delay={index * 100}
            duration={1500}
            triggerOnce={true}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border group">
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-52 object-cover group-hover:scale-105 duration-300 transition-all"
              />
              <div className="p-4 relative">
                <div className="flex items-center justify-between absolute right-2 -top-4 text-sm  ">
                  <span className="border bg-gray-100 rounded-lg px-3 py-1 flex items-center gap-1 hover:border-green-500 ">
                    <Star className="w-4 h-4 text-green-400 fill-green-400" />{" "}
                    {car.rating} ({car.reviews})
                  </span>
                </div>
                <h3 className="text-lg font-semibold mt-2 mb-1">{car.name}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <VenusAndMars className="w-4 h-4" /> {car.location}
                </p>
                <hr className="my-3" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="text-gray-500 text-sm flex items-center gap-2">
                    <CarTaxiFront className="w-4 h-4" /> {car.miles}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-2">
                    <CircleGauge className="w-4 h-4" /> {car.transmission}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span className="text-gray-500 text-sm flex items-center gap-2">
                    <Fuel className="w-4 h-4" /> {car.fuel}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-2">
                    <Armchair className="w-4 h-4" /> {car.seats}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">{car.price}</span>
                  <button className="border bg-gray-100 rounded-xl px-3 py-2 hover:bg-green-500 hover:text-white duration-300 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link to="/allProducts">
          <button className="bg-green-500 px-4 py-3 rounded-md text-white">
            View All Products
          </button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default CarCard;
