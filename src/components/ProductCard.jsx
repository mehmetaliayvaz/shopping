import StarIcon from "./icon/StarIcon";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="bg-white rounded shadow-md p-5 flex flex-col justify-between h-[400px]">
      <div>
        <img src={props.product.images[0] } className="w-full h-[150px] object-cover mb-5" alt="" />
        <Link to={"/product/" + props.product.id}>
          <h3 className="text-sm mb-3">
            { props.product.title ?? 'Vestel Televizyon' }
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
        <span className="font-semibold text-2xl">{ props.product.price } TL</span>
        <button className="btn-primary">Sepete Ekle</button>
      </div>
    </div>
  )
}

export default ProductCard