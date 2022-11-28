import { useSelector } from "react-redux";

function OrderDetail() {
  const shoppingCartItems = useSelector(state => state.shoppingCart.value);

  return (
    <div className="bg-white p-6">
      <div className="py-3">
        <h2 className="text-xl">Sipariş Detayı</h2>
      </div>
      <div className="mb-10">
        <div className="py-3 flex justify-between border-t border-gray-200">
          <h3 className="text-gray-700">Ara Toplam</h3>
          <span>
            { 
              shoppingCartItems.reduce((total, item) => {
                return total + (item.price * item.quantity);
              }, 0)
            }
          </span>
        </div>
        <div className="py-3 flex justify-between border-t border-gray-200">
          <h3 className="text-gray-700">Kargo</h3>
          <span>19 TL</span>
        </div>
        <div className="py-3 flex justify-between border-t border-gray-200">
          <h3 className="text-gray-700">Toplam</h3>
          <span>
            {
              shoppingCartItems.reduce((total, item) => {
                return total + (item.price * item.quantity);
              }, 0) + 19
            }
          </span>
        </div>
      </div>
      <div>
        <button className="btn-primary w-full py-3">Sipariş Ver</button>
      </div>
    </div>
  )
}

export default OrderDetail