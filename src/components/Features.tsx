import { featureData } from "../data/featureData";

const Features = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 xl:-my-12 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {featureData.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 bg-[#F3F4F6] hover:bg-[#0989FF] transition-all hover:text-white px-4 py-6 cursor-progress"
          >
            <div className="text-4xl">{item.icon}</div>
            <div>
              <h1 className="font-semibold">{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
