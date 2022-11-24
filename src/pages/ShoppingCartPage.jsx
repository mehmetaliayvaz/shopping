import ShoppingCartProduct from "../components/ShoppingCartProduct";
import OrderDetail from "../components/OrderDetail";
// import ProductSlider from "../components/ProductSlider";
import { useSelector } from "react-redux";

function ShoppingCartPage() {
  const shoppingCartItems = useSelector(state => state.shoppingCart.value);

  return (
    <div className="page-wrapper">

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

      {/* <ProductSlider /> */}

    </div>
  )
}

export default ShoppingCartPage