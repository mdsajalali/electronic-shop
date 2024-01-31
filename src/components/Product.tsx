import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

interface ProductProps {
  product: {
    img: string;
    name: string;
    title: string;
    price: string;
  };
}

const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <div className="border-x border-t">
        <img src={product.img} alt="" />
      </div>
      <div className="border px-4">
        <div>
          <p className="font-semibold text-gray-500 mt-2">{product.name}</p>
          <p className="my-1">{product.title}</p>
        </div>
        <div className="flex gap-5 items-center justify-between">
          <div className="flex">
            <FaStar color={"#FFB21D"} />
            <FaStar color={"#FFB21D"} />
            <FaStar color={"#FFB21D"} />
            <FaStar color={"#FFB21D"} />
            <FaRegStar className="text-[#FFB21D]" />
          </div>
          <p>(4 Review)</p>
        </div>
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-[18px] mt-5">{product.price}</h1>
          <button className=" mt-5 px-3 py-2 rounded-sm bg-[#DC2626]  hover:bg-[#0989FF]   text-white transition-all font-semibold flex items-center gap-2">
            <FiShoppingCart size={20} /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
