import ShoppingCartProduct from "../components/ShoppingCartProduct";
import OrderDetail from "../components/OrderDetail";
import ProductSlider from "../components/ProductSlider";
import { useSelector } from "react-redux";
import { useState } from "react";

function ShoppingCartPage() {
  const shoppingCartItems = useSelector(state => state.shoppingCart.value);
  const products = useSelector(state => state.products.value);
  const [isOrder, setIsOrder] = useState(false);

  return (
    <div className="page-wrapper">

      { shoppingCartItems.length > 0 ? (
        <section className="mb-20">
          <div className="container">
            <div className="gap-8 md:flex">
              <div className="md:w-7/12">
                {
                  shoppingCartItems.map((item, index) => (
                    <ShoppingCartProduct key={index} product={item} isShoppingCart={true} />
                  ))
                }
              </div>
              <div className="md:w-5/12">
                <OrderDetail setIsOrder={setIsOrder} />
              </div>
            </div>
          </div>
        </section>
        ) : (
          <section className="mb-20">
            <div className="container">
              <div className="text-center">
                {
                  isOrder ? (
                    <h1 className="py-20 text-3xl bg-green-200">Siparişiniz başarıyla verilmiştir.</h1>
                  ) : (
                    <h1 className="py-20 text-3xl font-semibold">Sepetinizde ürün bulunmamaktadır.</h1>
                  )
                }
              </div>
            </div>
          </section>
        )
      }

      <ProductSlider products={products} />

    </div>
  )
}

export default ShoppingCartPage