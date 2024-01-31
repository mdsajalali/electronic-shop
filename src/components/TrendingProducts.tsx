import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getProducts } from "../redux/productSlice";
import Product from "./Product";

const TrendingProducts: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
