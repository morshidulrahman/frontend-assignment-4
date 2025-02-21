import AutoTrader from "./components/home/AutoTrader";
import VehicleCategory from "./components/home/CarCategory";
import CarCard from "./components/home/FeaturedProduct";

import Hero from "./components/home/Hero";

import HowitWorks from "./components/home/HowitWorks";
import BlogCarousel from "./pages/dashboard/Blog";

const App = () => {
  return (
    <div>
      <Hero />
      <CarCard />
      <HowitWorks />
      <VehicleCategory />
      <div className="container mx-auto">
        <BlogCarousel />
      </div>
      <AutoTrader />
    </div>
  );
};

export default App;
