import ShoppingCartProduct from "../components/ShoppingCartProduct";
import OrderDetail from "../components/OrderDetail";
import ProductSlider from "../components/ProductSlider";
import { useSelector } from "react-redux";

function ShoppingCartPage() {
  const shoppingCartItems = useSelector(state => state.shoppingCart.value);
  const products = useSelector(state => state.products.value);

  return (
    <div className="page-wrapper">

      { shoppingCartItems.length > 0 ? (
        <section className="mb-20">
          <div className="container">
            <div className="md:flex gap-8">
              <div className="md:w-7/12">
                {
                  shoppingCartItems.map((item, index) => (
                    <ShoppingCartProduct key={index} product={item} />
                  ))
                }
              </div>
              <div className="md:w-5/12">
                <OrderDetail />
              </div>
            </div>
          </div>
        </section>
        ) : (
          <section className="mb-20">
            <div className="container">
              <div className="text-center">
                <h1 className="font-semibold text-3xl py-20">Sepetinizde ürün bulunmamaktadır.</h1>
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