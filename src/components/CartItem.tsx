import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { removeItem } from "../redux/cartSlice";
import toast from "react-hot-toast";

const CartItem = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(products);

  const handleRemove = (productId) => {
    dispatch(removeItem(productId));
    toast.success("Product deleted successfully!");
  };
  return (
    <div className="mt-28 max-w-[1200px] mx-auto px-4">
      <h1 className="text-2xl font-semibold">
        Total Product : {products.length}
      </h1>
      <div className="my-10">
        {products.map((product) => (
          <div className="flex w-full   relative  items-center justify-between my-5">
            <div className="border-y border-l ">
              <img
                className="h-[150px] sm:h-[200px] object-cover"
                src={product.img}
                alt=""
              />
            </div>
            <div className="border w-full px-4 sm:flex justify-between items-center h-[150px] sm:h-[200px]">
              <div>
                <p className="font-semibold text-gray-500 mt-2">
                  {product.name}
                </p>
                <p className="my-1">{product.title}</p>
              </div>
              <div className="absolute hidden sm:block top-0 left-0 bg-[#0989FF] px-3 py-[2px]">
                <h1 className="text-[20px] text-white">{product.id}</h1>
              </div>
              <div className="flex gap-5 items-center  ">
                <div className="flex">
                  <FaStar color={"#FFB21D"} />
                  <FaStar color={"#FFB21D"} />
                  <FaStar color={"#FFB21D"} />
                  <FaStar color={"#FFB21D"} />
                  <FaRegStar className="text-[#FFB21D]" />
                </div>
                <p className="hidden sm:block">(4 Review)</p>
              </div>
              <h1 className="font-bold text-[18px]">{product.price}</h1>
            </div>
            <div
              onClick={() => handleRemove(product.id)}
              className="absolute right-0 top-0 cursor-pointer bg-[#0989FF] px-2 py-[2px] text-white hover:bg-[#DC2626] transition-all"
            >
              <IoMdClose size={25} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
