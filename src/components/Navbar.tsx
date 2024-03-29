import React from "react";
import { IoIosSearch } from "react-icons/io";
import { LuUserCircle2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const product = useSelector((state: RootState) => state.cart);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-md">
      <div className="flex items-center justify-between py-4 max-w-[1200px] mx-auto px-4">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-semibold">Electronic Shop</h1>
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center">
            <input
              className="border-[#0989FF] w-[400px] outline-none p-2 border-2"
              type="text"
              placeholder="Search products..."
            />
            <div className="bg-[#0989FF] px-4 py-[7px] text-white">
              <IoIosSearch size={30} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10  ">
          <div className="hidden sm:block">
            <div className="flex items-center gap-2 ">
              <div className="text-gray-500">
                <LuUserCircle2 size={50} />
              </div>
              <div>
                <p className="text-gray-400">Hello, Sign in</p>
                <p className="font-semibold">Your Account</p>
              </div>
            </div>
          </div>
          <Link to="/cartItem">
            <div className="relative mr-4 xl:mr-0">
              <FiShoppingCart className="text-gray-500" size={30} />
              <span className="absolute flex items-center justify-center -top-2 left-5    bg-[#DC2626] text-white w-6 h-6 rounded-full">
                {product.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
