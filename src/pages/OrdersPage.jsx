import OrderContent from "../components/OrderContent";
import { useSelector } from "react-redux";

function OrdersPage() {
  const orders = useSelector((state) => state.orders.value);
  return (
    <div className="page-wrapper">
      <div className="container">
        {orders.length > 0 ? (
          <div>
            {orders
              .map((item, idx) => orders[orders.length - 1 - idx])
              .map((orderItem, orderIndex) => {
                return (
                  <OrderContent
                    key={orderIndex}
                    orderItem={orderItem}
                    id={orders.length - orderIndex}
                  />
                );
              })}
          </div>
        ) : (
          <h1 className="py-20 text-3xl font-semibold text-center">
            Geçmiş siparişiniz bulunmamaktadır...
          </h1>
        )}
      </div>
    </div>
  );
}

export default OrdersPage;
