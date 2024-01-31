const ProductBanner = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-20">
      <div className="grid grid-cols-12 gap-5  mt-32 mb-20">
        <div className="col-span-12 lg:col-span-8 bg-[url('https://i.ibb.co/0MRWsQg/product-banner-1.jpg')]    h-[250px]    bg-cover bg-center rounded-xl p-8 md:p-16">
          <div className="hidden sm:block">
            <h3 className="text-2xl font-semibold">Sale 20% off all store</h3>
            <h1 className="text-2xl md:text-4xl font-bold">
              Smartphone BLU <br /> G91 Pro 2023
            </h1>
            <button className="bg-white mt-5 px-4 py-2 rounded-sm hover:bg-[#0989FF]   hover:text-white transition-all font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 bg-[url('https://i.ibb.co/Nrj7QGd/product-banner-2.jpg')] h-[250px]   bg-cover bg-center rounded-xl p-8 md:p-16"></div>
      </div>
    </div>
  );
};

export default ProductBanner;
