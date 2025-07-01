import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../components/SectionTitle";
import "swiper/css";
import 'swiper/css/navigation';
import data from '../data/data';
import {  Navigation } from 'swiper/modules';

const Main = () => {
    let [shopping] =useState(data)
    return (
        <div>
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
            <section className='summer'>
                <h2>지금여름🌿</h2>
                <h3>설레는 여름</h3>

                <div className="summerLists">
                    <ul>
                        {
                            shopping.map((item,index) => (
                                <li key={index}>
                                    <img src={process.env.PUBLIC_URL + shopping[index].img} alt="" />
                                    <div className="textbox">
                                        <div className="priceWrap">
                                            <span className="sale">{shopping[index].sale}</span>
                                            <span className="price">{shopping[index].price}</span>
                                            <span className="discount">{shopping[index].discount}</span>
                                        </div>
                                        <div className="title">{shopping[index].title}</div>
                                        <div className="descript">{shopping[index].descript}</div>
                                        <div className="company">{shopping[index].company}</div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </main>
        </div>
    );
};

export default Main;