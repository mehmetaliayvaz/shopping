import SidebarCategories from "../components/SidebarCategories";
import IntroSlider from "../components/IntroSlider";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://shopping-api-ten.vercel.app/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <section>
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="w-2/12">
              <SidebarCategories />
            </div>
            <div className="w-10/12">
              <IntroSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="container">
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
      </section>
    </div>
  );
}

export default HomePage;
