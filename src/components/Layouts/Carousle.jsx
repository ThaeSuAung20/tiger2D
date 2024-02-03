import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import '../../assets/css/Layout.css';

import carousel1 from '../../assets/img/carousels/carousel1.jpg';
import carousel2 from '../../assets/img/carousels/carousel2.jpg';
import carousel3 from '../../assets/img/carousels/carousel3.jpg';

const Carousel = () => {
  const banners = [carousel1, carousel2, carousel3];

  return (
    <div className='carousel-container'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {
          banners.map((banner)=>{
            return <SwiperSlide>
            <img src={banner} className="w-100"/>
          </SwiperSlide>
          })
        }
        
      </Swiper>
    </div>
  );
};

export default Carousel;
