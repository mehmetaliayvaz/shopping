import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function IntroSlider() {
  return (
    <Swiper
      className="intro-slider"
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='bg-home-slider w-full h-full'>
          <img src="/img/home-slider.png" alt="" className='w-full h-[500px] object-cover' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-home-slider w-full h-full'>
          <img src="/img/home-slider.png" alt="" className='w-full h-[500px] object-cover' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-home-slider w-full h-full'>
          <img src="/img/home-slider.png" alt="" className='w-full h-[500px] object-cover' />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default IntroSlider