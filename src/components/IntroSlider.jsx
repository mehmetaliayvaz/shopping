import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function IntroSlider(props) {
  const slider = [
    'home-banner-1.png',
    'home-banner-2.png',
    'home-banner-3.png',
    'home-banner-4.png',
    'home-banner-5.png',
  ]

  return (
    <Swiper
      className={'intro-slider ' + props.className}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
    >
      {
        slider.map((sliderItem, sliderIndex) => {
          return(
            <SwiperSlide key={sliderIndex}>
              <div className='bg-home-slider w-full h-full'>
                <img src={'/img/slider/' + sliderItem} alt="" className='w-full h-[500px] object-cover' />
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default IntroSlider