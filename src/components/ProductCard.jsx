import StarIcon from "./icon/StarIcon";
import { Link } from "react-router-dom";
import { addToCart } from "../store/shoppingCart";
import { useDispatch } from "react-redux";

function ProductCard(props) {

  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded shadow-md p-5 flex flex-col justify-between h-[450px]">
      <div>
        <Link to={"/product/" + props.product.id}>
          <div className="h-[200px] mb-5 border border-gray-300">
            <img src={props.product.images[0] } className="w-full max-h-[100%] object-cover" alt="" />
          </div>
        </Link>
        <Link to={"/product/" + props.product.id}>
          <h3 className="text-sm mb-3">
            { props.product.title }
          </h3>
        </Link>
        <div className="flex">
          <StarIcon size="16" strokeColor="black" fillColor="black" />
          <StarIcon size="16" strokeColor="black" fillColor="black" />
          <StarIcon size="16" strokeColor="black" fillColor="black" />
          <StarIcon size="16" strokeColor="black" fillColor="black" />
          <StarIcon size="16" strokeColor="black" />
        </div>
      </div>
      <div className="flex justify-between"> 
        <span className="font-semibold text-xl">{ props.product.price } ₺</span>
        <button className="btn-primary text-xs" onClick={ () => dispatch(addToCart(props.product)) }>Sepete Ekle</button>
      </div>
    </div>
  )
}

export default ProductCard