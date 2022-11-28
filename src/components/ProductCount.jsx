import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../store/shoppingCart";

function ProductCount({ quantity, productId }) {
  const dispatch = useDispatch();

  return (
    <div className="text-sm inline-flex shadow-md">
      <button 
        className="bg-gray-300 w-6 h-6 flex justify-center items-center"
        onClick={ () =>  dispatch(decreaseQuantity(productId)) }
      >
        -
      </button>
      <div className="w-10 flex items-center justify-center">{ quantity }</div>
      <button 
        className="bg-gray-300 w-6 h-6 flex justify-center items-center"
        onClick={ () =>  dispatch(increaseQuantity(productId)) }
      >
        +
      </button>
    </div>
  )
}

export default ProductCount