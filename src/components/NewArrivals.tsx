import headphone from "../assets/images/headphone-1.png";
import mobile from "../assets/images/mobile-2.png";
import ipad from "../assets/images/ipad-1.png";
import cpu from "../assets/images/cpu-1.png";

interface Product {
  id: number;
  imgSrc: string;
}

const products: Product[] = [
  { id: 1, imgSrc: headphone },
  { id: 2, imgSrc: mobile },
  { id: 3, imgSrc: ipad },
  { id: 4, imgSrc: cpu },
];

const NewArrivals = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-20">
      <h1 className="text-2xl md:text-4xl font-semibold mt-10">New Arrivals</h1>
      <div className="flex flex-wrap items-center justify-center   gap-10">
        {products.map((product) => (
          <img
            key={product.id}
            className="w-[250px] h-[350px] object-cover"
            src={product.imgSrc}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
