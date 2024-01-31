const TrendingProducts = () => {
  return (
    <div className="mt-32 max-w-[1200px] mx-auto px-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Trending Products
        </h1>
        <div className="flex gap-5 text-[20px]">
          <p>New</p>
          <p className="text-gray-400">Featured</p>
          <p className="text-gray-400">Top Sellers</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
