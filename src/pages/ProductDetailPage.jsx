import ProductSlider from "../components/ProductSlider";
import ProductCount from "../components/ProductCount";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useSelector } from "react-redux";
import { addToCart } from "../store/shoppingCart";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function ProductDetailPage() {

  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState();
  const params = useParams();
  const products = useSelector(state => state.products.value);
  const dispatch = useDispatch();

  const addToCartAction = () => {
    dispatch(addToCart(product))
    toast.success("Sepete eklendi")
  }

  useEffect(() => {
    axios.get(`https://shopping-api-ten.vercel.app/products/${params.id}`)
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
              {
                product.images?.map(image => (
                  <button key={image} onClick={ () => setActiveImg(image) } className="bg-white aspect-square border border-gray-100 p-3">
                    <img src={image} className="w-full h-full object-cover" alt="" />
                  </button>
                ))
              }
            </div>
            <div className="w-5/12 bg-white border border-gray-100 aspect-square p-10">
            <img src={ activeImg } className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-6/12 px-4">
              <div>
                <h1 className="font-semibold text-xl mb-8">
                  { product.title }
                </h1>
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-semibold text-3xl mr-10">{ product.price } ₺</span>
                <ProductCount />
              </div>
              <div className="mb-8">
                <button className="btn-primary px-8 py-2" onClick={addToCartAction}>
                  Sepete Ekle
                </button>
              </div>
              <div>
                <p className="text-sm">
                  { product.description }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider products={ products } />

    </div>
  )
}

export default ProductDetailPage