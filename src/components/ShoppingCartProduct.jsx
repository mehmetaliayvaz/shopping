import ProductCount from "./ProductCount";
import CloseIcon from "./icon/CloseIcon";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/shoppingCart";
import { Link } from "react-router-dom";

function ShoppingCartProduct({ product, isShoppingCart }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between p-8 bg-white border-gray-200 border-y">
      <div className="flex">
        <Link to={"/product/" + product.id}>
          <div className="w-[170px] aspect-square p-3 border border-gray-300 mr-5 flex justify-center items-center">
            <img src={ product.images[0] } className="max-h-[100%] w-auto" alt="" />
          </div>
        </Link>
        <div>
          <div className="flex flex-col mb-8">
            <Link to={"/product/" + product.id}>
              <h2 className="mb-4 text-sm font-medium">{ product.title }</h2>
            </Link>
            <span className="font-medium ">{ product.price } ₺</span>
          </div>
          {
            isShoppingCart ? (
              <ProductCount quantity={product.quantity ?? 1} productId={product.id} />
            ) : (
              <p className="text-sm"><span className="font-medium">Ürün Adeti:</span> { product.quantity ?? 1 }</p>
            )
          }
        </div>
      </div>
      <div>
        {
          isShoppingCart && (
            <button onClick={ () => dispatch(removeFromCart(product.id)) }>
              <CloseIcon size="17" />
            </button>
          )
        }
      </div>
    </div>
  )
}

export default ShoppingCartProduct