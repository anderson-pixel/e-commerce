import React, {useRef} from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation,EffectFade, Pagination, Scrollbar, A11y } from 'swiper';
import Script from 'next/script';
import styles from '../styles/Home.module.scss';


import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {

  const swiperNavPrevRef = useRef(null)
  const swiperNavNextRef = useRef(null)

  return (
    <>
    <section className="home">
    <div className={styles.container}>
    <Swiper
      modules={[Navigation, EffectFade]}

      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      effect={'fade'}
      speed={800}
      slidesPerView={1}
      loop
      className={styles.myswiper}

      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <SwiperSlide className={styles.swiperslide}>
        <img src='home-img-1.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>
        <img src='home-img-2.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>
        <img src='home-img-3.jpg' alt='' />
      </SwiperSlide>
      <div className={styles.swiperNavPrev} ref=
      {swiperNavPrevRef}></div>
      <div className={styles.swiperNavNext} ref=
      {swiperNavNextRef}></div>
   </Swiper>
    </div>
    </section>
    </>
  )
}

export default HeroBanner