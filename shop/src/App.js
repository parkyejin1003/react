import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import SectionTitle from './components/SectionTitle.js';
import Best from './pages/Best';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import './App.scss';



/* import React, { useRef, useState } from "react"; */

function App() {
  return (
    <div className="App">
        <div className="popup">
            <Swiper 
            modules={[Autoplay]}
            autoplay={true}
            className="mySwiper">
            <SwiperSlide>아뜨랑스에서 사이즈 고민 하지마세요! 사이즈 무료교환</SwiperSlide>
            <SwiperSlide>오늘밤 10시30분까지 주문하면 오/늘/출/발</SwiperSlide>
            <SwiperSlide>급할 땐 오늘출발, 새벽배송</SwiperSlide>
            <SwiperSlide>앱 다운 받고, 첫 로그인하면 3천원 쿠폰을 드려요!</SwiperSlide>
            <SwiperSlide>아뜨랑스 카카오 채널 추가 시 3,000원 할인 쿠폰 지급♥</SwiperSlide>
            </Swiper>
        </div>
         
        <header>
            <div className="headerLeft">
                <h1><a href="index.html">ATTRANGS🎀</a></h1>
                <nav>
                    <ul>
                        <li><Link to="/best" href="#">BEST </Link></li>
                        <li><Link to="/best" href="#" className="g">NEW</Link></li>
                        <li><Link to="/best" href="#">지금여름🌿<span>N</span></Link></li>
                        <li><Link to="/best" href="#">장마룩☔<span>N</span></Link></li>
                        <li><Link to="/best" href="#">휴양지룩👗<span>N</span></Link></li>
                        <li><Link to="/best" href="#">MADE</Link></li>
                        <li><Link to="/best" href="#">오늘의할인</Link></li>
                        <li><Link to="/best" href="#">하객룩</Link></li>
                        <li><Link to="/best" href="#">아우터</Link></li>
                        <li><Link to="/best" href="#">원피스</Link></li>
                        <li><Link to="/best" href="#">니트</Link></li>
                        <li><Link to="/best" href="#">티셔츠</Link></li>
                        <li><Link to="/best" href="#">블라우스/셔츠</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="headerRight">
                <div className="gnb">
                    <ul>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#"></Link></li>
                        <li><Link href="#">로그인</Link></li>
                    </ul>
                </div>
            </div>
        </header>
       
        <Routes>
            <Route path="/best" element={<Best />}/>
        </Routes>
        <main>
            <section className="mainSlide">
                <h2 className="ir_so">메인 슬라이드</h2>
                <Swiper navigation={true} modules={[Navigation]} className="mainSwiper">
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + "/img/slide1.jpg"} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + "/img/slide2.jpg"} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + "/img/slide3.jpg"} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + "/img/slide4.jpg"} alt="" />
                </SwiperSlide>
                </Swiper>
            </section>
            <SectionTitle />
        </main>
    </div>
  );
}

export default App;