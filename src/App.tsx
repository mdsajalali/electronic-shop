import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import ProductBanner from "./components/ProductBanner";
import Footer from "./components/Footer";
import TrendingProducts from "./components/TrendingProducts";
import { Route, Routes } from "react-router-dom";
import CartItem from "./components/CartItem";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/cartItem" element={<CartItem />} />
    </Routes>
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
