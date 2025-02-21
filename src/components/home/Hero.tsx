import { Check } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center relative h-screen"
      style={{
        backgroundImage:
          "url('https://carento-nextjs.vercel.app/_next/static/media/banner.c6982b24.png')",
      }}
    >
      <div className="bg-black/70 absolute inset-0 ">
        <div className="container mx-auto px-6  relative h-full">
          <div className="w-[70%] absolute top-[30%]">
            <Fade
              cascade={true}
              triggerOnce={false}
              damping={1e-1}
              direction="up"
              delay={200}
              duration={1500}
            >
              <p className="text-sm text-[#70f46d] mb-4">
                Find Your Perfect Car
              </p>
              <h1 className="text-5xl font-extrabold text-white mb-8 leading-[55px]">
                Looking for a vehicle? <br />
                You're in the perfect spot.
              </h1>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <button className="bg-[#70f46d] flex items-center justify-center rounded-full p-1">
                    <Check className="w-4 h-4 " />
                  </button>{" "}
                  <p className="text-white text-sm">
                    High quality at a low cost.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-[#70f46d] flex items-center justify-center rounded-full p-1">
                    <Check className="w-4 h-4 " />
                  </button>{" "}
                  <p className="text-white text-sm">Premium services.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-[#70f46d] flex items-center justify-center rounded-full p-1">
                    <Check className="w-4 h-4 " />
                  </button>{" "}
                  <p className="text-white text-sm">
                    {" "}
                    with 24/7 roadside support.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
