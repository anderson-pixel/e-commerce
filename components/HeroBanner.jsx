import React, {useRef} from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectFade, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
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
    <div style={{overflow: 'hidden'}} className="swiper-clip">
    <Swiper
      modules={[Navigation, EffectFade, Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{delay: 2500}}
      pagination={{ clickable: true }}
      className={styles.myswiper}

      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <SwiperSlide className={styles.swiperslide}>
      <div className='image' style={{ flex:'8',
                textAlign: 'center'}}>
      <img style={{height: '25rem'}} src='home-img-1.jpg' alt='' />
      </div>
      <div className="content" style={{flex: '1 1 42rem'}}>
      <span style={{fontSize: '2rem',
      color:'#01bf71'}}>upto 50% off</span>
      <h3 style={{paddingTop: '.5rem',
      color:'black',
      fontSize: '3rem'}}>smartphones</h3>
      <a href="#" className="btn">shop now</a>
      </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>
      <div className='image' style={{ flex:'8',
                textAlign: 'center'}}>
      <img style={{height: '22rem'}} src='home-img-2.jpg' alt='' />
      </div>
      <div className="content" style={{flex: '1 1 42rem'}}>
      <span style={{fontSize: '2rem',
        color:'#01bf71'}}>upto 50% off</span>
            <h3 style={{paddingTop: '.5rem',
        color:'black',
        fontSize: '3rem'}}>smartphones</h3>
                <a href="#" className="btn">shop now</a>
          </div>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperslide}>
      <div className='image' style={{ flex:'8',
                textAlign: 'center'}}>
      <img style={{height: '22rem'}} src='home-img-3.jpg' alt='' />
      </div>
      <div className="content" style={{flex: '1 1 42rem'}}>
      <span style={{fontSize: '2rem',
        color:'#01bf71'}}>upto 50% off</span>
            <h3 style={{paddingTop: '.5rem',
        color:'black',
        fontSize: '3rem'}}>smartphones</h3>
                <a href="#" className="btn">shop now</a>
          </div>
      </SwiperSlide>
   </Swiper>
   </div>
    </div>
    </section>
    </>
  )
}

export default HeroBanner