import TheHeader from "./components/TheHeader";
import HomePage from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import OrdersPage from "./pages/OrdersPage";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "./store/products";
import { setShoppingCart } from "./store/shoppingCart";
import axios from "axios";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  const loadData = async () => {
    await axios.get("https://shopping-api-ten.vercel.app/products")
      .then((res) => {
        dispatch(setProducts(res.data));
      });

    if(localStorage.getItem("shoppingCart")){
      dispatch(setShoppingCart(JSON.parse(localStorage.getItem("shoppingCart"))));
    }
  }

  useEffect(() => {
    loadData()
  } , []);

  return (
    <div className="bg-gray-50">
      <Toaster/>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default App;
