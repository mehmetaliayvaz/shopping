import ProductCount from "./ProductCount";
import CloseIcon from "./icon/CloseIcon";

function ShoppingCartProduct() {
  return (
    <div className="bg-white p-8 border-y border-gray-200 flex justify-between">
      <div className="flex">
        <div className="w-[170px] aspect-square p-3 border border-gray-300 mr-5 flex justify-center items-center">
          <img src="/img/product-example.png" className="max-h-[100%] w-auto" alt="" />
        </div>
        <div>
          <div className="mb-8 flex flex-col">
            <h2 className="text-sm font-medium mb-4">Erkek Polar Tam Fermuarlı 3 Cepli Outdoor</h2>
            <span className="text-xs font-medium mb-4">L</span>
            <span className="text-xs font-medium">320 TL</span>
          </div>
          <ProductCount />
        </div>
      </div>
      <div>
        <button>
          <CloseIcon size="17" />
        </button>
      </div>
    </div>
  )
}

export default ShoppingCartProduct