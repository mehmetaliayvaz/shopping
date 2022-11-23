import SidebarCategories from "../components/SidebarCategories";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function CategoryPage() {

  const [products, setProducts] = useState([]);

  const params = useParams();
  
  useEffect(() => {
    axios.get(`https://shopping-api-ten.vercel.app/products/category/${params.id}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, [params]);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="md:w-2/12">
            <SidebarCategories className="sticky top-20" />
          </div>
          <div className="md:w-10/12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              { 
                products.map((productItem, productIndex) => {
                  return (
                    <ProductCard key={productIndex} product={productItem} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
