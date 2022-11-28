import ProductCount from "./ProductCount";
import CloseIcon from "./icon/CloseIcon";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/shoppingCart";
import { Link } from "react-router-dom";

function ShoppingCartProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-8 border-y border-gray-200 flex justify-between">
      <div className="flex">
        <Link to={"/product/" + product.id}>
          <div className="w-[170px] aspect-square p-3 border border-gray-300 mr-5 flex justify-center items-center">
            <img src={ product.images[0] } className="max-h-[100%] w-auto" alt="" />
          </div>
        </Link>
        <div>
          <div className="mb-8 flex flex-col">
            <Link to={"/product/" + product.id}>
              <h2 className="text-sm font-medium mb-4">{ product.title }</h2>
            </Link>
            <span className="text-xs font-medium">{ product.price } TL</span>
          </div>
          <ProductCount quantity={product.quantity ?? 1} productId={product.id} />
        </div>
      </div>
      <div>
        <button onClick={ () => dispatch(removeFromCart(product.id)) }>
          <CloseIcon size="17" />
        </button>
      </div>
    </div>
  )
}

export default ShoppingCartProduct