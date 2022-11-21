import SidebarCategories from "../components/SidebarCategories";
import IntroSlider from "../components/IntroSlider";

function HomePage() {

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
    </div>
  );
}

export default HomePage;
