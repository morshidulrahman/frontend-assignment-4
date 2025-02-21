const AutoTrader = () => {
  return (
    <div
      className=" bg-cover bg-center py-10"
      style={{
        backgroundImage:
          "url('https://carento-nextjs.vercel.app/_next/static/media/background.34971879.png')",
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className=" ">
          <h1 className="text-4xl font-bold text-black mb-4">
            AutoTrader App is Available
          </h1>
          <p className="text-lg text-black mb-8">
            Manage all your car rentals on the go with the AutoTrader app
          </p>
          <div className="flex space-x-4">
            <img
              src="https://carento-nextjs.vercel.app/assets/imgs/template/googleplay.png"
              alt="Download on Google Play"
              className="h-12"
            />
            <img
              src="https://carento-nextjs.vercel.app/assets/imgs/template/appstore.png"
              alt="Download on the App Store"
              className="h-12"
            />
          </div>
        </div>
        <div>
          <img
            src="https://carento-nextjs.vercel.app/assets/imgs/app/app-1/truck.png"
            alt="Truck"
            className="w-full  h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AutoTrader;
