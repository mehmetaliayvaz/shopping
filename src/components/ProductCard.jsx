import StarIcon from "./icon/StarIcon";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="bg-white rounded shadow-md p-5 flex flex-col justify-between h-[400px]">
      <div>
        <img src="/img/product.png" className="w-full h-[150px] object-cover mb-5" alt="" />
        <Link to="/product-detail">
          <h3 className="text-sm mb-3">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
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
        <span className="font-semibold text-2xl">1200 TL</span>
        <button className="btn-primary">Sepete Ekle</button>
      </div>
    </div>
  )
}

export default ProductCard