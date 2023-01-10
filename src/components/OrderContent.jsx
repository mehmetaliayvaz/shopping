import ShoppingCartProduct from "./ShoppingCartProduct";
import { useState } from "react";

function OrderContent({ orderItem, id }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-20">
      <button onClick={() => setIsOpen(!isOpen)}>
        <h2 className="mb-5 text-xl font-semibold text-primary">
          Sipariş ID:
          <span className="">{id}</span>
        </h2>
      </button>
      {isOpen && (
        <div>
          {orderItem.map((productItem, productIndex) => {
            return (
              <ShoppingCartProduct
                key={productIndex}
                product={productItem}
                isShoppingCart={false}
              />
            );
          })}
        </div>
      )}

      <p className="p-5 font-semibold">
        Toplam Tutar:{" "}
        {orderItem.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        )}{" "}
        ₺
      </p>
    </div>
  );
}

export default OrderContent;
