import SidebarCategories from "../components/SidebarCategories";
import IntroSlider from "../components/IntroSlider";
import ProductCard from "../components/ProductCard";

function HomePage() {

  const productCards = Array.from({ length: 16 }).map(
    (el, index) => `Slide ${index + 1}`
  );

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
              productCards.map((el, index) => (
                <ProductCard key={index} />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
