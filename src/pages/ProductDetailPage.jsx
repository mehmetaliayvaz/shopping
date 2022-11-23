// import ProductSlider from "../components/ProductSlider";
import ProductCount from "../components/ProductCount";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function ProductDetailPage() {
  const productSm = Array.from({ length: 4 })

  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    axios.get(`https://shopping-api-ten.vercel.app/products/${params.id}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, [params.id]);

  return (
    <div className="page-wrapper">
      
      <section className="mb-[100px]">
        <div className="container">
          <div className="flex gap-8">
            <div className="w-1/12 space-y-4">
              {
                productSm.map((el, index) => (
                  <div className="bg-white aspect-square border border-gray-100 p-3">
                    <img src="/img/product-detail.png" className="w-full h-full object-cover" alt="" />
                  </div>
                ))
              }
            </div>
            <div className="w-5/12 bg-white border border-gray-100 aspect-square p-10">
            <img src="/img/product-detail.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-6/12 px-4">
              <div>
                <h1 className="font-semibold text-xl mb-8">
                  { product.title }
                </h1>
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-semibold text-3xl mr-10">14890 TL</span>
                <ProductCount />
              </div>
              <div className="mb-8">
                <button className="btn-primary px-8 py-2">
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

      {/* <ProductSlider /> */}

    </div>
  )
}

export default ProductDetailPage