import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

function ProductSlider() {

  const productSlider = Array.from({ length: 16 })

  return (
    <section>
      <div className="container">
        <Swiper
          className="intro-slider"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            productSlider.map((el, index) => (
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default ProductSlider