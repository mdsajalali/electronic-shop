import hero_bg from "../assets/images/hero.png";
const Banner = () => {
  return (
    <div className="bg-[#E3EDF6] min-h-[50vh]">
      <div className="md:mt-20 mt-10 max-w-[1200px] mx-auto px-4">
        <div className="flex items-center flex-wrap justify-center lg:justify-between pt-20 ">
          <div>
            <p className="text-[18px]">
              Starting at <span className="font-bold">$999.00</span>
            </p>
            <h1 className="my-3 text-3xl md:text-5xl font-bold">
              The best note book <br /> collection 2023
            </h1>
            <h3 className="font-mono text-[20px]">
              Exclusive offer
              <span className="text-red-500  font-semibold">-10%</span> off this
              week
            </h3>
            <button className="bg-white mt-5 px-4 py-2 rounded-sm hover:bg-[#0989FF] hover:text-white transition-all font-semibold">
              Shop Now
            </button>
          </div>
          <div className="mb-20">
            <img className="w-[300px] md:w-full" src={hero_bg} alt="Hero Bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
