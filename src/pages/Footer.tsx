import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer
      className="relative bg-black text-white py-10 px-5 md:px-20"
      style={{
        backgroundImage:
          "url('https://carento-nextjs.vercel.app/assets/imgs/page-header/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Subscribe to see secret deals prices
          </h2>
          <p className="text-lg">Drop the moment you sign up!</p>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-72 md:w-96 px-10 py-6 bg-black text-white rounded-md border border-black"
              />
              <Mail className="absolute left-3 top-4 text-gray-400" size={18} />
            </div>
            <Button className="bg-green-500 text-black px-6 py-6 rounded-md hover:bg-green-600">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-green-500 p-2 rounded-full">
                <MapPin className="text-black" size={20} />
              </div>
              <h3 className="text-xl font-bold">Autotrader</h3>
            </div>
            <p className="text-gray-300 text-sm">
              2356 Oakwood Drive, Suite 18, San Francisco, California 94111, US
            </p>
            <div className="flex items-center gap-2 mt-3 text-gray-400">
              <Clock size={18} />
              <p>Hours: 8:00 - 17:00, Mon - Sat</p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-gray-400">
              <Mail size={18} />
              <p>support@carento.com</p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-green-400 font-bold">
              <Phone size={18} />
              <p>+1 222-555-33-99</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>About Us</li>
              <li>Our Awards</li>
              <li>Agencies</li>
              <li>Copyright Notices</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Our Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Car Rental Services</li>
              <li>Vehicle Leasing Options</li>
              <li>Long-Term Car Rentals</li>
              <li>Car Sales and Trade-Ins</li>
              <li>Luxury Car Rentals</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Forum Support</li>
              <li>Help Center</li>
              <li>Live Chat</li>
              <li>How it Works</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
