import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import ProductBanner from "./components/ProductBanner";
import Footer from "./components/Footer";
import TrendingProducts from "./components/TrendingProducts";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <TrendingProducts />
      <ProductBanner />
      <Footer />
    </>
  );
};

export default App;
