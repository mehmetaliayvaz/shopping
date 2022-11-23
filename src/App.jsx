import TheHeader from "./components/TheHeader";
import HomePage from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-50">
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
