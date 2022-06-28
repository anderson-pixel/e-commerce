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
    <div className="swipe-container">
    <SwiperSlide className={styles.swiperslide}>
        <div style={{display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap:'2rem',
      minHeight: '40rem',
      padding:'2rem 0'}}className="swiper-slide slide">

            <div style={{flex: '1 1 42rem',textAlign: 'center'}} className="image">
                <img style={{height: '30rem'}} src="home-img-1.jpg" alt=""/>
            </div>
            <div className="content" style={{flex:'1 1 42rem'}}>
                <span style={{fontSize: '2rem',
          color:'blue'}}>upto 50% off</span>
                <h3 style={{paddingTop: '.5rem',
          color: 'black',
          fontSize: '3rem'}}>headphones</h3>
                <a href="#" className="btn">shop now</a>
            </div>
        </div>

        </SwiperSlide>
      </div>
    </Swiper>
    </div>
    </section>
    </>
  )
}

export default HeroBanner