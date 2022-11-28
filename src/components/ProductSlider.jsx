import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

function ProductSlider({products}) {

  return (
    <section>
      <div className="container">
        <Swiper
          className="intro-slider"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
        >
          {
            products.map((productItem, productIndex) => {
              return (
                <SwiperSlide key={productIndex}>
                  <ProductCard product={productItem} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default ProductSlider