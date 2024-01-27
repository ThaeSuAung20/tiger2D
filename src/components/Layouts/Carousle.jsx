import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
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
        pagination={{
          clickable: false,
        }}
        className='mySwiper'
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className='marquee-container'>
              <img
                src={banner}
                className='w-100 carousel-img'
                alt={`Slide ${index + 1}`}
              />
              <div className='marquee-text'>
                Testing text and you can change this with every text that you
                want
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
