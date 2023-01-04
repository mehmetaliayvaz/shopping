import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setOrder } from "../store/orders";
import { removeCart } from "../store/shoppingCart";
import { useState } from "react";
import AnimDotsIcon from "./icon/AnimDotsIcon";

function OrderDetail({ setIsOrder }) {
  const [loading, setLoading] = useState(false);

  const shoppingCartItems = useSelector((state) => state.shoppingCart.value);
  const dispatch = useDispatch();

  const orderProducts = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setOrder(shoppingCartItems));
      dispatch(removeCart());
      setIsOrder(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 bg-white">
      <div className="py-3">
        <h2 className="text-xl">Sipariş Detayı</h2>
      </div>
      <div className="mb-10">
        <div className="flex justify-between py-3 border-t border-gray-200">
          <h3 className="text-gray-700">Ara Toplam</h3>
          <span>
            {shoppingCartItems.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0)}
          </span>
        </div>
        <div className="flex justify-between py-3 border-t border-gray-200">
          <h3 className="text-gray-700">Kargo</h3>
          <span>19 TL</span>
        </div>
        <div className="flex justify-between py-3 border-t border-gray-200">
          <h3 className="text-gray-700">Toplam</h3>
          <span>
            {shoppingCartItems.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0) + 19}
          </span>
        </div>
      </div>
      <div>
        <button
          className={
            "flex justify-center w-full py-3 btn-primary " +
            (loading ? "bg-red-300 hover:bg-red-300 cursor-not-allowed" : "")
          }
          onClick={() => orderProducts()}
        >
          {loading ? <AnimDotsIcon /> : <span>Sipariş Ver</span>}
        </button>
      </div>
    </div>
  );
}

export default OrderDetail;
