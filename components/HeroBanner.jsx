import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Script from 'next/script';
import styles from '../styles/Home.module.scss';


import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
    <section className="home">
    <div className={styles.container}>
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true}}
      onSwiper={swiper => console.log('swiper')}
      className={styles.myswiper}
    >
      <div class="box-container">
      <SwiperSlide className={styles.swiperslide}>
    <a class="box">
        <img src="banner-1.jpg" alt=""/>
        <div class="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
        </div>
    </a>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>
      <a class="box">
        <img src="banner-1.jpg" alt=""/>
        <div class="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
        </div>
      </a>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>
      <a class="box">
        <img src="banner-1.jpg" alt=""/>
        <div class="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
        </div>
      </a>
      </SwiperSlide>
      </div>
      ...
    </Swiper>
    </div>
    </section>
    </>
  )
}

export default HeroBanner