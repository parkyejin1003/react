import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../components/SectionTitle";
import "swiper/css";
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Main = ({shopping}) => {
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
                                <li key={item.id}>
                                    <Link to={`/detail/${item.id}`}>
                                        <img src={process.env.PUBLIC_URL + item.img} alt="" />
                                        <div className="textbox">
                                            <div className="priceWrap">
                                                <span className="sale">{item.sale}</span>
                                                <span className="price">{item.price}</span>
                                                <span className="discount">{item.discount}</span>
                                            </div>
                                            <div className="title">{item.title}</div>
                                            <div className="descript">{item.descript}</div>
                                            <div className="company">{item.company}</div>
                                        </div>
                                    </Link>
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