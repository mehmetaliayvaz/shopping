import ProductSlider from "../components/ProductSlider";
import ProductCount from "../components/ProductCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { addToCart } from "../store/shoppingCart";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function ProductDetailPage() {
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState();
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  const addToCartAction = () => {
    dispatch(addToCart({ product: product, quantity: quantity }));
    toast.success("Sepete eklendi");
  };

  useEffect(() => {
    axios
      .get(`https://shopping-api-ten.vercel.app/products/${params.id}`)
      .then((res) => {
        setProduct(res.data);
        setActiveImg(res.data.images[0]);
      });
  }, [params.id]);

  return (
    <div className="page-wrapper">
      <section className="mb-[100px]">
        <div className="container">
          <div className="flex gap-8">
            <div className="w-1/12 space-y-4">
              {product.images?.map((image) => (
                <button
                  key={image}
                  onClick={() => setActiveImg(image)}
                  className="p-3 bg-white border border-gray-100 aspect-square"
                >
                  <img
                    src={image}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </button>
              ))}
            </div>
            <div className="w-5/12 p-10 bg-white border border-gray-100 aspect-square">
              <img
                src={activeImg}
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="w-6/12 px-4">
              <div>
                <h1 className="mb-8 text-xl font-semibold">{product.title}</h1>
              </div>
              <div className="flex items-center mb-8">
                <span className="mr-10 text-3xl font-semibold">
                  {product.price} ₺
                </span>
                <ProductCount quantity={quantity} setQuantity={setQuantity} />
              </div>
              <div className="mb-8">
                <button
                  className="px-8 py-2 btn-primary"
                  onClick={addToCartAction}
                >
                  Sepete Ekle
                </button>
              </div>
              <div>
                <p className="text-sm">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider products={products} />
    </div>
  );
}

export default ProductDetailPage;
