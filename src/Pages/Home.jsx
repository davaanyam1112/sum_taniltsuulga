import React from "react";
import Navbar from "../Components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import Highlights from "../Components/Highlights" ;
import { FooterWithSocialLinks } from "../Components/Footer";
import 'swiper/css';
const Home = () => {
    return(
        <div>
            <Navbar/>
            <div className = "mx-10 font-sans">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    className = "mt-2"

                >
                    <SwiperSlide>
                        {/* <img src = "/assets/images/sum1.jpg" alt = "sum" style={{ width: '100%', height: '450px' }}/> */}
                    </SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                <div className="">
                    <p className="border-l-4  font-semibold  pl-4 text-xl border-indigo-500"># ОНЦЛОХ МЭДЭЭЛЭЛ</p>
                    <div className = "my-5">
                        <Highlights/>
                    </div>
                </div>
                <div className="">
                    <p className="border-l-4 font-semibold  pl-4 text-xl border-indigo-500"># СҮҮЛД НЭМЭГДСЭН МЭДЭЭЛЭЛ</p>
                    <div className = "my-5">
                        <Highlights/>
                    </div>
                </div>
                <div className = "grid md:grid-cols-5 md:gap-4 my-5  ">
                    <div className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
                        <div className="flex justify-center">
                            <p className=" bg-indigo-100 text-indigo-500 justify-center p-5 rounded-full text-xl">10</p>
                        </div>
                        <p className="flex justify-center">Газар нутаг</p>
                    </div>
                    <div  className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
                        <div className="flex justify-center">
                            <p className=" bg-indigo-100 text-indigo-500 justify-center p-5 rounded-full text-xl">10</p>
                        </div>
                        <p className="flex justify-center">Хүн ам</p>
                    </div>
                    <div  className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
                        <div className="flex justify-center">
                            <p className=" bg-indigo-100 text-indigo-500 justify-center p-5 rounded-full text-xl">10</p>
                        </div>
                        <p className="flex justify-center">Айл өрх</p>
                    </div>
                    <div className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
                        <div className="flex justify-center">
                            <p className=" bg-indigo-100 text-indigo-500 justify-center p-5 rounded-full text-xl">10</p>
                        </div>
                        <p className="flex justify-center"> Аж ахуйн нэгж</p>
                    </div>
                    <div className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-200 hover:-translate-y-2 duration-200">
                        <div className="flex justify-center">
                            <p className=" bg-indigo-100 text-indigo-500 justify-center p-5 rounded-full text-xl">10</p>
                        </div>
                        <p className="flex justify-center">Мал сүрэг</p>
                    </div>
                </div>
                </div>
                <FooterWithSocialLinks/>
        </div>
    );
}
export default Home ;