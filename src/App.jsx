import TheHeader from "./components/TheHeader";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-50">
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
