import { Fade } from "react-awesome-reveal";

const vehicleData = [
  {
    name: "SUV",
    vehicles: 24,
    image:
      "https://carento-nextjs.vercel.app/assets/imgs/categories/categories-1/car-1.png",
  },
  {
    name: "Hatchback",
    vehicles: 16,
    image:
      "https://carento-nextjs.vercel.app/assets/imgs/categories/categories-1/car-2.png",
  },
  {
    name: "Sedan",
    vehicles: 150,
    image:
      "https://carento-nextjs.vercel.app/assets/imgs/categories/categories-1/car-3.png",
  },
  {
    name: "Crossover",
    vehicles: 25,
    image:
      "https://carento-nextjs.vercel.app/assets/imgs/categories/categories-1/car-4.png",
  },
  {
    name: "Minivan",
    vehicles: 56,
    image:
      "https://carento-nextjs.vercel.app/assets/imgs/categories/categories-1/car-5.png",
  },
  {
    name: "Coupe",
    vehicles: 25,
    image:
      "https://carento-nextjs.vercel.app/assets/imgs/categories/categories-1/car-6.png",
  },
  {
    name: "Sport Cars",
    vehicles: 125,
    image:
      "https://carento-nextjs.vercel.app/assets/imgs/categories/categories-1/car-7.png",
  },
  {
    name: "Pickup Truck",
    vehicles: 30,
    image:
      "https://carento-nextjs.vercel.app/assets/imgs/categories/categories-1/car-8.png",
  },
];

const VehicleCategory = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Browse by Type</h2>
          <p className="text-gray-500">
            Find the perfect ride for any occasion
          </p>
        </div>
        <div className=" justify-center mt-6 hidden md:flex">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            View More ➝
          </button>
        </div>
      </div>
      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {vehicleData.map((vehicle, index) => (
          <Fade
            key={index}
            direction="up"
            delay={index * 100}
            duration={1500}
            triggerOnce={false}
          >
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg  border transition-all duration-500 hover:-translate-y-1">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-32  sm:h-28 md:h-24 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">{vehicle.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="bg-gray-100 border rounded-xl text-xs px-2 py-1 font-semibold hover:bg-green-500 hover:text-white">
                  {vehicle.vehicles} Vehicles
                </p>
                <button className="bg-gray-100 border rounded-xl text-xs px-2  font-semibold hover:bg-green-500 hover:text-white">
                  ➝
                </button>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default VehicleCategory;
